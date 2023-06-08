import * as PIXI from 'pixi.js'

const asset_shapes_images: Record<string, any> = {};
const asset_shapes_pixi = (window as any).PIXI;
const ss: Record<string, any> = {};

namespace lib {
    export const properties = {
        width: 550,
        height: 400,
        fps: 120,
        color: "#999999",
        manifest: [],
    };

    export class triangle extends asset_shapes_pixi.DisplayObjectContainer {
        public graphics: PIXI.Graphics;

        constructor() {
            super();
            this.initialize();
            // レイヤー 1
            // 图层1
            this.graphics = new asset_shapes_pixi.Graphics();
            this.graphics
                .beginFill(0xFFFFFF)
                // added lineStyle to match createjs
                .lineStyle(0)
                .moveTo(-0.7, -27.8)
                .lineTo(32, 27.1)
                .lineTo(-32, 27.8)
                .closePath();
            // changed setTransform to position.set
            this.graphics.position.set(0, -7);
            // changed addChild to addChildAt
            this.addChildAt(this.graphics, 0);
        }
    }

    triangle.prototype.nominalBounds = new asset_shapes_pixi.Rectangle(-32, -34.8, 64, 55.7);
}

export default lib;
// Execute the following line if you have the necessary dependencies imported:
// const myTriangle = new lib.triangle();
