/**
 * 色の情報を扱うデータ型クラスです。
 * 处理颜色信息的数据类型类。
 */
class ColorData {
    /**
     * 色相を表します(0-360)。
     * 色调(0-360)。
     * @type {number}
     */
    hue: number;
    /**
     * 色相のばらつきを示します。
     * 色调的偏差。
     * @type {number}
     */
    hueVariance: number;
    /**
     * 彩度です(0-100)。
     * 饱和度(0-100)。
     * @type {number}
     */
    saturation: number;
    /**
     * 彩度のばらつきです。
     * 饱和度的偏差。
     * @type {number}
     */
    saturationVariance: number;
    /**
     * 輝度です(0-100)。
     * 亮度(0-100)
     * @type {number}
     */
    luminance: number;
    /**
     * 輝度のばらつきです。
     * 亮度的偏差。
     * @type {number}
     */
    luminanceVariance: number;

    constructor() {
        this.hue = 0;
        this.hueVariance = 0;
        this.saturation = 0;
        this.saturationVariance = 0;
        this.luminance = 0;
        this.luminanceVariance = 0;
    }
}