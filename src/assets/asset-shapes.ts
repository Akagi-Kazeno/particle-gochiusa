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
            // レイヤー 1
            // 图层1
            this.graphics = new asset_shapes_pixi.Graphics();
            this.graphics
                .beginFill("#FFFFFF")
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

    triangle.prototype = new asset_shapes_pixi.drawRect(-32, -34.8, 64, 55.7);

    export class star_10 extends asset_shapes_pixi.DisplayObjectContainer {
        public graphics: PIXI.Graphics;

        constructor() {
            super();
            // レイヤー 1
            // 图层1
            this.graphics = new asset_shapes_pixi.Graphics();
            this.graphics
                .beginFill("#FFFFFF")
                // added lineStyle to match createjs
                .lineStyle(0)
                .moveTo(-4.3, 18.3)
                .lineTo(-19.9, 29.3)
                .lineTo(-14.1, 10.3)
                .lineTo(-32, 10.3)
                .lineTo(-19.7, 0.7)
                .lineTo(-31.2, -8.7)
                .lineTo(-15.2, -8.8)
                .lineTo(-21.7, -26.4)
                .lineTo(-5.4, -16.4)
                .lineTo(-0.2, -31.8)
                .lineTo(4.4, -17.6)
                .lineTo(17.8, -27.4)
                .lineTo(13.1, -8.5)
                .lineTo(30.3, -8.1)
                .lineTo(19.9, 0.1)
                .lineTo(32, 8.4)
                .lineTo(12.8, 9.5)
                .lineTo(18.2, 29.8)
                .lineTo(4.9, 20)
                .lineTo(1.4, 31.8)
                .closePath();
            // changed addChild to addChildAt
            this.addChildAt(this.graphics, 0);
        }
    }

    star_10.prototype = new asset_shapes_pixi.drawRect(-32, -31.7, 64, 63.6);

    export class star extends asset_shapes_pixi.DisplayObjectContainer {
        public graphics: PIXI.Graphics;

        constructor() {
            super();
            // レイヤー 1
            // 图层1
            this.graphics = new asset_shapes_pixi.Graphics();
            this.graphics
                .beginFill("#FFFFFF")
                .lineStyle(0)
                .moveTo(-0.2, 17.3)
                .lineTo(-20.2, 31.5)
                .lineTo(-13, 7.4)
                .lineTo(-32, -8)
                .lineTo(-7.8, -8.4)
                .lineTo(0.3, -32)
                .lineTo(8, -8.2)
                .lineTo(32, -7.4)
                .lineTo(12.8, 7.5)
                .lineTo(19.4, 32)
                .closePath();
            this.addChildAt(this.graphics, 0);
        }
    }

    star.prototype = new asset_shapes_pixi.drawRect(-32, -32, 64, 64);

    export class square extends asset_shapes_pixi.DisplayObjectContainer {
        public graphics: PIXI.Graphics;

        constructor() {
            super();
            // レイヤー 1
            // 图层1
            this.graphics = new asset_shapes_pixi.Graphics();
            this.graphics
                .beginFill("#FFFFFF")
                // added lineStyle to match createjs
                .lineStyle(8, 1, 1)
                .moveTo(-32, -32)
                .lineTo(32, -32)
                .lineTo(32, 32)
                .lineTo(-32, 32)
                .closePath();
            this.addChildAt(this.graphics, 0);
        }
    }

    square.prototype = new asset_shapes_pixi.drawRect(-36, -36, 72, 72);

    export class reverse_blur_circle extends asset_shapes_pixi.DisplayObjectContainer {
        public graphics: PIXI.Graphics;

        constructor() {
            super();
            this.graphics = new asset_shapes_pixi.Graphics();
            this.graphics
                .beginFill("#FFFFFF")
                // added lineStyle to match createjs
                .lineStyle(8, 1, 1)
                .moveTo(32, 0)
                // use quadraticCurveTO to match createjs curveTo
                .quadraticCurveTo(32, 13.2, 22.6, 22.6)
                .quadraticCurveTo(13.3, 32, 0, 32)
                .quadraticCurveTo(-13.2, 32, -22.7, 22.6)
                .quadraticCurveTo(-32, 13.2, -32, 0)
                .quadraticCurveTo(-32, -13.3, -22.7, -22.7)
                .quadraticCurveTo(-13.2, -32, 0, -32)
                .quadraticCurveTo(13.3, -32, 22.6, -22.7)
                .quadraticCurveTo(32, -13.3, 32, 0)
                .closePath();
            this.addChildAt(this.graphics, 0);
        }
    }

    reverse_blur_circle.prototype = new asset_shapes_pixi.drawRect(-36, -36, 72, 72);
}

export default lib;
// Execute the following line if you have the necessary dependencies imported:
// const myTriangle = new lib.triangle();
// const myStar_10 = new lib.star_10();
// const my_star = new lib.star();
// const my_square = new lib.square();
// const my_reverse_blur_circle = new lib.reverse_blur_circle();
