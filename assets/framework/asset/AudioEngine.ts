import { AudioClip, AudioSource, isValid, Node } from 'cc';
import { StoreKey } from '../../game/common/AppConst';
import { EMap } from '../common/EMap';
import { mixins, valueset } from '../common/general';
import { StorageData } from '../storage/StorageData';
enum AudioDeviceType {
    MUSIC,
    EFFECT
}
const AUDIO_PIPE = 'pipe';
class AudioDevice {
    constructor(obj: AudioSource, type: AudioDeviceType, id: number) {
        this._handler = obj;
        this._type = type;
        this.id = id;
    }
    private _handler: AudioSource;
    private _volume: number = 1;
    private _type: AudioDeviceType;
    private _defaultClip?: AudioClip;

    public id: number = 0;

    public get handler(): AudioSource {
        return this._handler;
    }

    public set handler(v: AudioSource) {
        this._handler = v;
    }

    public get volume(): number {
        return this._volume;
    }

    public set volume(v: number) {
        let needPlay = this._volume <= 0 && v > 0;
        this._volume = v;
        this._handler.volume = v;
        if (needPlay && this.defaultClip) {
            this.play(this.defaultClip);
        } else if (this._volume <= 0) {
            this._handler.pause();
        }
    }

    public set defaultClip(v: AudioClip | undefined) {
        this._defaultClip = v;
    }

    public get defaultClip(): AudioClip | undefined {
        return this._defaultClip;
    }


    public get valid(): boolean {
        return isValid(this._handler, true);
    }



    public play(clip: AudioClip): void;
    public play(clip: AudioClip, loop: boolean): void;
    public play(clip: AudioClip, volume: number): void;
    public play(clip: AudioClip, volume: number, loop: boolean): void;
    public play(clip: AudioClip, ...params: any[]) {
        let volume_ = this._volume;
        let loop_ = undefined;
        for (let index = 0; index < params.length; index++) {
            let type_ = typeof params[index];
            if (type_ === 'number') {
                volume_ = params[index];
            } else if (type_ === 'boolean') {
                loop_ = params[index];
            }
        }
        if (this._volume <= 0) {
            return;
        }
        this._handler.volume = volume_;
        if (loop_ !== undefined) {
            this._handler.loop = loop_;
        }

        if (this._type === AudioDeviceType.MUSIC && this._handler.clip) {
            this._handler.stop();
        }
        this._handler.clip = clip;
        this._handler.play();
    }

    public pause() {
        this._handler.pause();
    }

    public stop() {
        this._handler.stop();
    }

    public resume() {
        if (this._volume <= 0) {
            return;
        }
        if (this._handler.state === AudioSource.AudioState.PAUSED) {
            this.defaultClip && this.play(this.defaultClip);
        } else if (this._handler.state !== AudioSource.AudioState.STOPPED && this._handler.loop) {
            this.defaultClip && this.play(this.defaultClip);
        }
    }
}

export type AudioControl = {
    allAllow?: boolean,
    musicAllow?: boolean,
    effectAllow?: boolean,
    musicVolume?: number,
    effectVolume?: number,
}

export class AudioEngine {
    private static _instance: AudioEngine;
    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new AudioEngine();
        valueset(globalThis, 'gaudio', this._instance);

        return this._instance;
    }

    private _isBackground: boolean = false;
    public get isBackground(): boolean {
        return this._isBackground;
    }
    public set isBackground(value: boolean) {
        this._isBackground = value;
    }

    private _paused = false;
    private _clips: Record<string, AudioClip> = {};

    private _music_id: string = '';

    private _control: AudioControl = {};
    public get control(): AudioControl {
        return this._control;
    }
    public set control(value: AudioControl) {
        if (Object.prototype.hasOwnProperty.call(value, 'allAllow')) {
            this.allAllow(value.allAllow);
        } else if (Object.prototype.hasOwnProperty.call(value, 'musicAllow')) {
            !value.musicAllow && this.stopMusic(-1);
        } else if (Object.prototype.hasOwnProperty.call(value, 'effectAllow')) {
            !value.effectAllow && this.stopEffect(-1);
        } else if (Object.prototype.hasOwnProperty.call(value, 'musicVolume')) {
            this.musicVolume(value.musicVolume);
        } else if (Object.prototype.hasOwnProperty.call(value, 'effectVolume')) {
            this.effectVolume(value.effectVolume);
        }
        mixins(value, this._control);
        this._saveSettings();
    }

    private _music_devices: EMap<AudioDevice> = new EMap<AudioDevice>();
    private _effect_devices: EMap<AudioDevice> = new EMap<AudioDevice>();
    private _panel!: Node;

    constructor() {
    }

    public setInfo(panel: Node) {
        this._panel = panel;
        this._clips = {};
        const defaultValue = { allAllow: true, musicAllow: true, effectAllow: true, musicVolume: 0.5, effectVolume: 0.5 };
        this.control = JSON.parse(StorageData.local.get(StoreKey.SYS_APP_AUDIO, JSON.stringify(defaultValue))) as AudioControl;
        this._saveSettings();
    };

    public push(item: Record<string, AudioClip>) {
        for (const key in item) {
            if (Object.prototype.hasOwnProperty.call(item, key)) {
                const element = item[key];
                this._clips[key] = element;
                if (key === this._music_id) {
                    this.music(0, element, true);
                }
            }
        }
    };

    public clear(key?: string | string[]) {
        if (key instanceof Array) {
            key.forEach((e) => {
                delete this._clips[e];
            })
        } else if (key) {
            delete this._clips[key];
        } else {
            this._clips = {};
        }
    }

    public pause() {
        this._paused = true;
        this._music_devices.forEach(device => {
            device.pause();
        });
        this._effect_devices.forEach(device => {
            device.pause();
        });
    }

    public resume() {
        this._paused = false;
        if (!this.control.allAllow || !this.control.musicAllow) return;
        this._music_devices.forEach(device => {
            device.resume();
        });
    }

    public music(pipeIdx: number, audio: string | AudioClip): number;
    public music(pipeIdx: number, audio: string | AudioClip, loop: boolean): number;
    public music(pipeIdx: number, audio: string | AudioClip, volume: number, loop?: boolean): number;
    public music(pipeIdx: number, audio: string | AudioClip, volume?: number | boolean, loop?: boolean): number {
        if (this.isBackground) {
            return
        }
        if (!this.control.allAllow || !this.control.musicAllow) {
            return;
        }
        let device = this.device(pipeIdx, AudioDeviceType.MUSIC);
        if (this._paused) return device.id;
        if (volume === undefined) {
            volume = this.control.musicVolume;
        } else if (typeof volume === 'boolean') {
            loop = volume;
            volume = this.control.musicVolume;
        }

        let clip: AudioClip | undefined;
        if (audio instanceof AudioClip) {
            clip = audio;
            if (pipeIdx === 0) this._music_id = '';
        } else {
            if (pipeIdx === 0) this._music_id = audio;
            clip = this._clips[audio];
        }
        if (clip) {
            if (clip === device.defaultClip) {
                return device.id;
            }
            device.defaultClip = clip;
            device.handler.loop = !!loop;
            device.play(clip, volume, !!loop);
        }
        return device.id;
    }

    public effect(pipeIdx: number, audio: string | AudioClip): number;
    public effect(pipeIdx: number, audio: string | AudioClip, loop: boolean): number;
    public effect(pipeIdx: number, audio: string | AudioClip, volume: number, loop?: boolean): number;
    public effect(pipeIdx: number, audio: string | AudioClip, volume?: number | boolean, loop?: boolean): number {
        if (this.isBackground) {
            return
        }
        if (!this.control.allAllow || !this.control.effectAllow) {
            return;
        }
        let device = this.device(pipeIdx, AudioDeviceType.EFFECT);
        if (this._paused) return device.id;
        if (volume === undefined) {
            volume = this.control.effectVolume;
        } else if (typeof volume === 'boolean') {
            loop = volume;
            volume = this.control.effectVolume;
        }

        let clip: AudioClip | undefined;
        if (audio instanceof AudioClip) {
            clip = audio;
        } else {
            clip = this._clips[audio];
        }
        if (clip) {
            device.play(clip, volume, !!loop);
        }
        return device.id;
    }

    /**
     * 
     * @param pipeIdx effect audio channel
     * @param value between 0.3 - 5.0
     */
    public effectPlaybackRate(pipeIdx: number, value: number) {
        let device = this.device(pipeIdx, AudioDeviceType.EFFECT);
        //@ts-ignore
        if (value === device.handler.playbackRate) {
            return;
        }
        //@ts-ignore
        device.handler.playbackRate = value;
    }

    pauseMusic(pipeIdx: number) {
        if (pipeIdx !== -1) {
            let device = this._music_devices.get(AUDIO_PIPE + pipeIdx);
            device && device.pause();
            return;
        }
        this._music_devices.forEach(device => {
            device.pause();
        })
    }

    pauseEffect(pipeIdx: number) {
        if (pipeIdx !== -1) {
            let device = this._effect_devices.get(AUDIO_PIPE + pipeIdx);
            device && device.pause();
            return;
        }
        this._effect_devices.forEach(device => {
            device.pause();
        })
    }

    resumeMusic(pipeIdx: number) {
        if (this.isBackground) {
            return
        }
        if (pipeIdx !== -1) {
            let device = this._music_devices.get(AUDIO_PIPE + pipeIdx);
            device && device.resume();
            return;
        }
        this._music_devices.forEach(device => {
            device.resume();
        })
    }

    resumeEffect(pipeIdx: number) {
        if (this.isBackground) {
            return
        }
        if (pipeIdx !== -1) {
            let device = this._effect_devices.get(AUDIO_PIPE + pipeIdx);
            device && device.resume();
            return;
        }
        this._effect_devices.forEach(device => {
            device.resume();
        })
    }

    stopMusic(pipeIdx: number) {
        if (pipeIdx !== -1) {
            let device = this._music_devices.get(AUDIO_PIPE + pipeIdx);
            device && device.stop();
            if (device) {
                device.defaultClip = null;
            }
            return;
        }
        this._music_devices.forEach(device => {
            device.stop();
            device.defaultClip = null;
        })
    }

    stopEffect(pipeIdx: number) {
        if (pipeIdx !== -1) {
            let device = this._effect_devices.get(AUDIO_PIPE + pipeIdx);
            device && device.stop();
            return;
        }
        this._effect_devices.forEach(device => {
            device.stop();
        })
    }

    public device(pipeIdx: number, type: AudioDeviceType) {
        let arr = type === AudioDeviceType.MUSIC ? this._music_devices : this._effect_devices;
        let device = arr.get(AUDIO_PIPE + pipeIdx);
        if (!device || !device.valid) {
            device = this._new_device(pipeIdx, type);
            device.volume = type === AudioDeviceType.MUSIC ? this.control.musicVolume : this.control.effectVolume;
            arr.add(AUDIO_PIPE + pipeIdx, device);
        }
        return device;
    }

    private _new_device(pipeIdx: number, type: AudioDeviceType) {
        let node = new Node('AUDIO_DEVICE_T' + type + '_ID' + pipeIdx);
        let cmp = node.addComponent(AudioSource);
        cmp.playOnAwake = false;
        node.parent = this._panel;
        let device = new AudioDevice(cmp, type, pipeIdx);
        return device;
    }

    public allAllow(v: boolean) {
        if (v) {
            this.resumeMusic(0);
        } else {
            this.stopEffect(-1);
            this.pauseMusic(-1);
        }
    }
    public musicVolume(v: number) {
        if (this.control.musicVolume === v) {
            return;
        }
        v = Math.round(v * 100) * 0.01;
        this._music_devices.forEach(device => {
            device.volume = v;
        })
    }

    public effectVolume(v: number) {
        if (this.control.effectVolume === v) {
            return;
        }
        v = Math.round(v * 100) * 0.01;
        this._effect_devices.forEach(device => {
            device.volume = v;
        })
    }

    private _saveSettings() {
        StorageData.local.set(StoreKey.SYS_APP_AUDIO, JSON.stringify(this.control));
    }
}