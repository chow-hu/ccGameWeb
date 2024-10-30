import { _decorator } from 'cc';
import { AppEvent } from '../../common/AppEvent';
import { IManager } from '../IManager';
import { EMgr } from '../interface';
import { LocalizedLabelPlus } from './LocalizedLabelPlus';
const { ccclass, property } = _decorator;

@ccclass('LocalizedLabelManager')
export class LocalizedLabelManager extends IManager {
    private listLLP:LocalizedLabelPlus[] = [];

    private static _instance: LocalizedLabelManager;
    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new LocalizedLabelManager();
        return this._instance;
    };

    constructor() {
        super(EMgr.LOCALIZED)
        this.on([AppEvent.SYS_LANGUAGE_CHANGE]);
    };

    add(llp:LocalizedLabelPlus){
        this.listLLP.push(llp);
    }

    remove(llp:LocalizedLabelPlus){
        const index = this.listLLP.indexOf(llp);
        if(index !== -1){
            this.listLLP.splice(index, 1);
        }  
    }

    private switchLanguage(){
        this.listLLP.forEach((value)=>{
            if(value.isValid && value.node && value.node.isValid){
                value.updateRenderer();
            }
        })
    }
    
    public onEvents(event: string, ...args: any[]): void {
        switch(event){
            case AppEvent.SYS_LANGUAGE_CHANGE:
                this.switchLanguage();
                break;
            default:
                break;
        }
    }
}
export const accountMgr: LocalizedLabelManager = LocalizedLabelManager.instance;


