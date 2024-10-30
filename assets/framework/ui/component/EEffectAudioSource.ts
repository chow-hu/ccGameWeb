/*
 * @Description: 
 * @Author: zy
 * @Date: 2022-09-23 17:57:27
 * @Reference: 
 */
import { _decorator, AudioSource } from 'cc';
import { AudioEngine } from '../../asset/AudioEngine';
const { ccclass, property } = _decorator;

@ccclass('EEffectAudioSource')
export class EEffectAudioSource extends AudioSource {
    play() {
        if (AudioEngine.instance.control.effectVolume === 0) {
            return;
        }
        this.volume = AudioEngine.instance.control.effectVolume;
        super.play();
    }
}

