//*//
import { BaseRenderData, Director, Game, Material, MotionStreak, Node, ParticleSystem2D, Sprite, SpriteFrame, StencilManager, TiledLayer, TransformBit, UIRenderer, VERSION, __private, assert, cclegacy, director, game, gfx, renderer, resources } from 'cc';
import { DEBUG, EDITOR, JSB } from 'cc/env';


export const MultBatch2D: any = {
    enable: false,
    parent: null,
    textures: [],
    hash: 0,
    reset: function () {
        this.textures.length = 0;
    }
};


const loadMultTextures = function () {
    MultBatch2D.enable = false; //提前加载多纹理材质
    resources.load("multTextures/Mult-material", Material, (err, material) => {
        if (!err) {
            let mat = cclegacy.builtinResMgr.get('ui-sprite-material');
            if (mat) {
                MultBatch2D.hash = Material.getHash(mat);
                MultBatch2D.parent = material;
                MultBatch2D.enable = true;
                material.addRef();
            }
        }
    });
}


let _cacheUseCount: number = 0;
let _cacheMaterials: Array<Material> = [];
const getMultMaterial = function (oldMat: any) {

    MultBatch2D.reset();

    if (!MultBatch2D.enable ||
        !oldMat || !oldMat.isMultTextures) {
        return oldMat;
    }

    if (!MultBatch2D.parent
        || !MultBatch2D.parent.isValid) {
        loadMultTextures();
        return oldMat;
    }

    //if (!MultBatch2D.enable) return null;
    let newMat: any = _cacheMaterials[_cacheUseCount++];
    if (!newMat || !newMat.isValid) {
        const material = { parent: MultBatch2D.parent };
        newMat = new renderer.MaterialInstance(material);
        _cacheMaterials[_cacheUseCount - 1] = newMat;
        newMat['isMultTextures'] = true;
        newMat['cacheTextures'] = [-1];
        newMat.addRef();
    }

    return newMat;
}

//如果有异常组件，或者自定义组件，
//在这进行添加排除,不参与多纹理合批
const excludeMaterial = function (uir: UIRenderer, material: any) {
    if (!material) return;

    let enable: boolean = true;
    if (enable && TiledLayer) {
        enable = !(uir instanceof TiledLayer);
    }
    if (enable && MotionStreak) {
        enable = !(uir instanceof MotionStreak);
    }
    if (enable && ParticleSystem2D) {
        enable = !(uir instanceof ParticleSystem2D);
    }


    material['isMultTextures'] = false;
    if (enable && MultBatch2D.hash == material.hash) {
        material['isMultTextures'] = true;
    }
}

game.once(Game.EVENT_GAME_INITED, () => {
    if (EDITOR || JSB) return;

    loadMultTextures();
    const UIR: any = UIRenderer.prototype;
    const updateMaterial: any = UIR.updateMaterial;
    UIR.updateMaterial = function () {
        updateMaterial.call(this); //this.getSharedMaterial(0);
        excludeMaterial(this, this.customMaterial || this.material);
    }

});



game.once(Game.EVENT_ENGINE_INITED, () => {
    if (EDITOR || JSB) return;

    cclegacy.UI.RenderData.prototype.texID = -1;
    cclegacy.UI.RenderData.prototype.isSpr = false;
    cclegacy.UI.RenderData.prototype.texDirty = true;
    cclegacy.UI.RenderData.prototype.isUpdate = false;
    cclegacy.UI.RenderData.prototype.dataDirty = true;

    Object.defineProperty(cclegacy.UI.RenderData.prototype, "vertDirty", {
        get: function () {
            return this._vertDirty;
        },
        set: function (val: boolean) {
            this._vertDirty = val;
            if (val === true && !this.isSpr && !this.isUpdate) {
                this.dataDirty = true;
            }
            if (this._renderDrawInfo && val) {
                this._renderDrawInfo.setVertDirty(val);
            }
        }
    });

    Object.defineProperty(cclegacy.UI.RenderData.prototype, "textureDirty", {
        get: function () {
            return this.texDirty;
        },
        set: function (val: boolean) {
            this.texDirty = val;
            if (val === true) {
                this.texID = -1;
            }
        }
    });


    let str = (VERSION.concat());
    str = str.replace('.','').replace('.','');
    if( parseInt( str ) < 384) { //修复 renderManager 刷新 bug

        const UIR: any = UIRenderer.prototype;
        const markForUpdateRenderData = UIR.markForUpdateRenderData;
        UIR.markForUpdateRenderData = function(enable = true){
            markForUpdateRenderData.call(this,enable);
            if(enable && this.renderData) {
                this.renderData.isUpdate = true;
            }
        }

        const updateRenderer = UIR.updateRenderer;
        UIR.updateRenderer = function(){
            updateRenderer.call(this);
            if(this.renderData){
                this.renderData.isUpdate = false;
            }
            
        }

    }



   let SPRA: any = cclegacy.UI.spriteAssembler;
   if (SPRA) {
       const spriteAssembler = SPRA.getAssembler;
       SPRA.getAssembler = function (sprite: Sprite) {
           const spr = spriteAssembler.call(this, sprite);
           if(spr.changeUV == undefined){
               spr.changeUV = function(s:any){
                   let rd = s.renderData;
                   if(rd){
                       rd.dataDirty = true;
                       rd.isSpr = true;
                   }
               };

               const UVs = spr.updateUVs;
               if(UVs){
                   if(sprite.type == Sprite.Type.FILLED && 
                       sprite.fillType != Sprite.FillType.RADIAL){
                       spr.updateUVs = function(s: any, f0: number, f1: number){
                           UVs.call(this,s,f0,f1);
                           this.changeUV(s);
                       }
                   }else{
                       spr.updateUVs = function(s:any){
                           UVs.call(this,s);
                           this.changeUV(s);
                       }
                   }
     
               }
              
               const verUV =  spr.updateWorldVertexAndUVData;
               if(verUV){
                   spr.updateWorldVertexAndUVData = function(s:any, c:any){
                       verUV.call(this,s, c);
                       this.changeUV(s);
                   }
               }
           }
           
           return spr;
       }
   }


    cclegacy.internal.Batcher2D.prototype.cacheTextures = [];
    cclegacy.internal.Batcher2D.prototype.currMaterial = null;
    cclegacy.internal.Batcher2D.prototype.isMultTextures = false;
    Object.defineProperty(cclegacy.internal.Batcher2D.prototype, "_currMaterial", {
        get: function () {
            return this.currMaterial;
        },
        set: function (metrial: any) {
            if (this.currMaterial === metrial) return;
            this.currMaterial = getMultMaterial(metrial);
            if (MultBatch2D.enable) {
                this.isMultTextures = false;
                if (this.currMaterial && this.currMaterial.isMultTextures) {
                    this.cacheTextures = this.currMaterial.cacheTextures;
                    this.isMultTextures = true;
                }
            }
        }
    });

    director.on(Director.EVENT_AFTER_DRAW, (dt) => {
        cclegacy.internal.Batcher2D.isMultTextures = false;
        cclegacy.internal.Batcher2D._rdHash = -1;
        MultBatch2D.reset();
        _cacheUseCount = 0;
    });

    const MAX_TEX = 8;
    const _texture = {
        texture: new cclegacy.SimpleTexture(),
        defalut: new cclegacy.SimpleTexture(),
        setFrame(frame: any) {
            this.texture['_gfxSampler'] = frame.getGFXSampler();
            this.texture['_gfxTextureView'] = frame.getGFXTexture();
        }
    };

    const Stage_ENTER_LEVEL = 2;
    const Stage_ENTER_LEVEL_INVERTED = 6;
    cclegacy.internal.Batcher2D.prototype._rdHash = -1;
    //@ts-ignore
    type TextureBase = __private._cocos_asset_assets_texture_base__TextureBase;
    cclegacy.internal.Batcher2D.prototype.commitComp = function (comp: UIRenderer, renderData: BaseRenderData | null, frame: TextureBase | SpriteFrame | null, assembler: any, transform: Node | null) {

        let rdHash = -1;
        let dataHash = 0;
        let mat: any;
        let bufferID = -1;

        if (renderData && renderData.chunk) {
            if (!renderData.isValid()) return;
            dataHash = renderData.dataHash;
            mat = renderData.material;
            bufferID = renderData.chunk.bufferId;
            // as RenderData;
            let rd: any = renderData;
            rdHash = bufferID << 16 | rd.layer;

        }

        // Notice: A little hack, if it is for mask, not need update here, while control by stencilManger
        if (comp.stencilStage === Stage_ENTER_LEVEL || comp.stencilStage === Stage_ENTER_LEVEL_INVERTED) {
            this._insertMaskBatch(comp);
        } else {
            comp.stencilStage = StencilManager.sharedManager!.stage;
        }
        const depthStencilStateStage = comp.stencilStage;


        let texID = -1;
        let texture = null;
        let MB = MultBatch2D;
        let flushBatch = false;
        let isMultTextures = false;
        let textures = MultBatch2D.textures;

        if (MB.enable && mat && mat.isMultTextures) {
            if(frame && frame.isValid) 
                texture = frame.getGFXTexture();
            if (texture) {

                texID = textures.indexOf(texture);
                isMultTextures = true;
                if (texID < 0) {
                    if (textures.length == MAX_TEX) {
                        flushBatch = true;
                    }
                }

                if (this.isMultTextures) {
                    mat = this._currMaterial;
                    dataHash = this._currHash;
                    if (this._rdHash != rdHash) {
                        flushBatch = true;
                        texID = -1;
                    }
                }
            }
        }


        if (flushBatch
            || this._currHash !== dataHash || dataHash === 0 || this._currMaterial !== mat
            || this._currDepthStencilStateStage !== depthStencilStateStage) {
            // Merge all previous data to a render batch, and update buffer for next render data
            this.autoMergeBatches(this._currComponent!);
            if (renderData && !renderData._isMeshBuffer) {
                this.updateBuffer(renderData.vertexFormat, bufferID);
            }

            this._rdHash = rdHash;
            this._currRenderData = renderData;
            this._currHash = renderData ? renderData.dataHash : 0;
            this._currComponent = comp;
            this._currTransform = transform;
            this._currMaterial = comp.getRenderMaterial(0)!;
            this._currDepthStencilStateStage = depthStencilStateStage;
            this._currLayer = comp.node.layer;
            if (frame) {
                if (DEBUG) {
                    assert(frame.isValid, 'frame should not be invalid, it may have been released');
                }
                this._currTexture = frame.getGFXTexture();
                this._currSampler = frame.getGFXSampler();
                this._currTextureHash = frame.getHash();
                this._currSamplerHash = this._currSampler.hash;
            } else {
                this._currTexture = null;
                this._currSampler = null;
                this._currTextureHash = 0;
                this._currSamplerHash = 0;
            }
        }

        assembler.fillBuffers(comp, this);


        if (isMultTextures) {
            if (texID < 0) {
                texID = textures.length;
                textures.push(texture);

                if (texID > 0) {
                    //@ts-ignore
                    let id = texture.objectID;
                    let caches = this.cacheTextures;
                    if (caches[texID] !== id) {
                        caches[texID] = id;
                        _texture.setFrame(frame);
                        const name = "texture" + texID;
                        this._currMaterial.setProperty(name, _texture.texture);
                    }
                }
            }
            this._fillDatas(renderData, texID);
        }

    }


    cclegacy.internal.Batcher2D.prototype["_fillDatas"] = function (renderData: any, texID: number) {


        if (!renderData) return;

        let uvX = 0;
        let vbuf = renderData.chunk.vb;
        if (renderData.dataDirty) {
            renderData.dataDirty = false;
            for (let i = 0, length = vbuf.length; i < length; i += 9) {
                uvX = ~~(vbuf[i + 3] * 100000);
                vbuf[i + 3] = uvX * 10 + texID;
            }
        } else {
            if (renderData.texID != texID) {
                for (let i = 0, length = vbuf.length; i < length; i += 9) {
                    uvX = ~~(vbuf[i + 3] * 0.1);
                    vbuf[i + 3] = uvX * 10 + texID;
                }
            }
        }
        renderData.texID = texID;
    };
});

//*/
