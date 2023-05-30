// CONCATENATED MODULE: ./src/particle/particle.ts

/**
 * パーティクルエミッターのバリューオブジェクトのクラスです。
 * 粒子取景器对象
 */
// @ts-ignore
import {createjs} from 'createjs';

export default class Particle {
    particleShape: createjs.Container;
    startColor: ColorData;

    constructor() {
        this.particleShape = createjs.Container;
        this.startColor = new ColorData();
    }
}