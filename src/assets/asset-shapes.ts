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
            this.graphics.addChildAt(this.graphics, 0);
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
            this.graphics.addChildAt(this.graphics, 0);
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
            this.graphics.addChildAt(this.graphics, 0);
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
            this.graphics.addChildAt(this.graphics, 0);
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
            this.graphics.addChildAt(this.graphics, 0);
        }
    }

    reverse_blur_circle.prototype = new asset_shapes_pixi.drawRect(-36, -36, 72, 72);

    export class kirakira extends asset_shapes_pixi.DisplayObjectContainer {
        public graphics: PIXI.Graphics;

        constructor() {
            super();
            this.graphics = new asset_shapes_pixi.Graphics();
            this.graphics
                .beginFill("#FFFFFF")
                .lineStyle(0)
                .moveTo(-9.6, 9.3)
                .quadraticCurveTo(-18.9, 0, -32, -0.1)
                .quadraticCurveTo(-18.9, -0.2, -9.6, -9.6)
                .quadraticCurveTo(-0.2, -19, -0.1, -32)
                .quadraticCurveTo(0, -19, 9.4, -9.6)
                .quadraticCurveTo(18.9, -0.2, 32, -0.1)
                .quadraticCurveTo(18.9, 0, 9.4, 9.3)
                .quadraticCurveTo(0, 18.8, -0.1, 32)
                .quadraticCurveTo(-0.2, 18.8, -9.6, 9.3)
                .closePath();
            this.graphics.addChildAt(this.graphics, 0);
        }
    }

    kirakira.prototype = new asset_shapes_pixi.drawRect(-32, -32, 64, 64);

    export class kirakira2 extends asset_shapes_pixi.DisplayObjectContainer {
        public graphics: PIXI.Graphics;

        constructor() {
            super();
            this.graphics = new asset_shapes_pixi.Graphics();
            this.graphics
                .beginFill("#FFFFFF")
                .lineStyle(0)
                .moveTo(-4, 9.5)
                .quadraticCurveTo(-7.8, 0, -13.4, -0.1)
                .quadraticCurveTo(-7.8, -0.2, -4, -9.9)
                .quadraticCurveTo(-0.1, -19.2, 0, -32)
                .quadraticCurveTo(0.1, -19.2, 4, -9.9)
                .quadraticCurveTo(8, -0.2, 13.4, -0.1)
                .quadraticCurveTo(8, 0, 4, 9.5)
                .quadraticCurveTo(0.1, 19, 0, 32)
                .quadraticCurveTo(-0.1, 19, -4, 9.5)
                .closePath();
            this.graphics.addChildAt(this.graphics, 0);
        }
    }

    kirakira2.prototype = new asset_shapes_pixi.drawRect(-13.4, -32, 26.8, 64);

    export class heart extends asset_shapes_pixi.DisplayObjectContainer {
        public graphics: PIXI.Graphics;

        constructor() {
            super();
            this.graphics = new asset_shapes_pixi.Graphics();
            this.graphics
                .beginFill("#FFFFFF")
                .lineStyle(0)
                .moveTo(-20.2, 10)
                .lineTo(-24.8, 3.5)
                .quadraticCurveTo(-27, 0.1, -28.5, -3.1)
                .quadraticCurveTo(-30.1, -6.4, -31.1, -9.5)
                .quadraticCurveTo(-32, -13, -32, -16)
                .quadraticCurveTo(-32, -19.7, -30.4, -22.7)
                .quadraticCurveTo(-29.1, -25.4, -26.6, -27.4)
                .quadraticCurveTo(-24, -29.1, -21, -30.1)
                .quadraticCurveTo(-18.1, -31.1, -15, -31.1)
                .quadraticCurveTo(-11.7, -31.1, -8.8, -29.9)
                .quadraticCurveTo(-6.4, -29, -4.5, -27.4)
                .quadraticCurveTo(-3, -25.9, -1.7, -23.9)
                .lineTo(0, -20.8)
                .lineTo(1.7, -23.9)
                .quadraticCurveTo(3, -25.9, 4.5, -27.4)
                .quadraticCurveTo(6.6, -29.1, 8.8, -29.9)
                .quadraticCurveTo(11.7, -31.1, 15.2, -31.1)
                .quadraticCurveTo(18.4, -31.1, 21.3, -30.1)
                .quadraticCurveTo(24.2, -29.1, 26.7, -27.2)
                .quadraticCurveTo(29.1, -25.3, 30.5, -22.6)
                .quadraticCurveTo(32, -19.7, 32, -16.1)
                .quadraticCurveTo(32, -13.3, 31, -9.7)
                .quadraticCurveTo(30.2, -6.5, 28.5, -3.2)
                .quadraticCurveTo(27.1, 0, 24.9, 3.3)
                .lineTo(20.3, 9.7)
                .quadraticCurveTo(13.4, 17.7, 9.7, 21.6)
                .lineTo(0, 31)
                .quadraticCurveTo(-13.6, 18.3, -20.2, 10)
                .closePath();
            this.graphics.addChildAt(this.graphics, 0);
        }
    }

    heart.prototype = new asset_shapes_pixi.drawRect(-32, -31, 64, 62.1);

    export class flower extends asset_shapes_pixi.DisplayObjectContainer {
        public graphics: PIXI.Graphics;

        constructor() {
            super();
            this.graphics = new asset_shapes_pixi.Graphics();
            this.graphics
                .beginFill("#FFFFFF")
                .lineStyle(0)
                .moveTo(4, 27.3)
                .quadraticCurveTo(0.5, 23.7, 0.5, 18.9)
                .lineTo(0.5, 15.2)
                .lineTo(-0.5, 15.2)
                .lineTo(-0.7, 18.9)
                .quadraticCurveTo(-0.9, 24, -4.1, 27.6)
                .quadraticCurveTo(-7.4, 31.1, -12.1, 31.1)
                .quadraticCurveTo(-17, 31.1, -20.8, 27.5)
                .quadraticCurveTo(-24.7, 23.7, -24.7, 19.1)
                .quadraticCurveTo(-24.7, 15.3, -22.2, 12.1)
                .quadraticCurveTo(-19.7, 8.8, -16.1, 7.7)
                .lineTo(-12.5, 6.4)
                .lineTo(-12.7, 5.8)
                .lineTo(-13, 5.4)
                .lineTo(-16.5, 6.6)
                .lineTo(-20.2, 7.1)
                .quadraticCurveTo(-25.3, 7.1, -28.7, 4)
                .quadraticCurveTo(-32, 0.7, -32, -4.1)
                .quadraticCurveTo(-32, -9.4, -28.7, -13)
                .quadraticCurveTo(-25.5, -16.8, -20.6, -16.8)
                .quadraticCurveTo(-17.8, -16.8, -15, -15.4)
                .quadraticCurveTo(-12.2, -14, -10.5, -11.6)
                .lineTo(-8.4, -8.7)
                .lineTo(-8, -8.8)
                .lineTo(-7.4, -9.3)
                .lineTo(-9.6, -12.2)
                .quadraticCurveTo(-10.7, -14, -11.3, -15.8)
                .quadraticCurveTo(-11.9, -17.9, -12, -19.9)
                .quadraticCurveTo(-12, -24.7, -8.5, -28)
                .quadraticCurveTo(-5.3, -31.1, -0.1, -31.1)
                .quadraticCurveTo(5.2, -31.1, 8.5, -28)
                .quadraticCurveTo(11.7, -24.7, 11.8, -19.9)
                .quadraticCurveTo(11.7, -17.7, 11.2, -15.7)
                .quadraticCurveTo(10.7, -13.8, 9.5, -12.2)
                .lineTo(7.4, -9.3)
                .lineTo(7.8, -9)
                .lineTo(8.2, -8.7)
                .lineTo(10.5, -11.6)
                .quadraticCurveTo(12.2, -14, 14.8, -15.4)
                .quadraticCurveTo(17.6, -16.8, 20.4, -16.8)
                .quadraticCurveTo(25.3, -16.8, 28.5, -13)
                .quadraticCurveTo(32, -9.4, 32, -4.1)
                .quadraticCurveTo(32, 0.8, 28.5, 4)
                .quadraticCurveTo(25.3, 7.1, 20, 7.1)
                .lineTo(16.4, 6.6)
                .lineTo(12.9, 5.5)
                .quadraticCurveTo(12.8, 5.6, 12.8, 5.6)
                .quadraticCurveTo(12.7, 5.7, 12.7, 5.7)
                .quadraticCurveTo(12.7, 5.8, 12.7, 5.8)
                .quadraticCurveTo(12.7, 5.9, 12.7, 6)
                .lineTo(12.5, 6.4)
                .lineTo(15.9, 7.7)
                .quadraticCurveTo(19.7, 9.1, 22.1, 12.2)
                .quadraticCurveTo(24.5, 15.3, 24.5, 19.1)
                .quadraticCurveTo(24.5, 23.7, 20.8, 27.5)
                .quadraticCurveTo(16.9, 31.1, 11.9, 31.1)
                .quadraticCurveTo(7.4, 31.1, 4, 27.3)
                .closePath()
                .moveTo(-7.7, -5.9)
                .quadraticCurveTo(-10.9, -2.7, -10.9, 1.8)
                .quadraticCurveTo(-10.9, 6.3, -7.7, 9.4)
                .quadraticCurveTo(-4.6, 12.5, -0.1, 12.5)
                .quadraticCurveTo(4.4, 12.5, 7.6, 9.4)
                .quadraticCurveTo(10.6, 6.3, 10.6, 1.8)
                .quadraticCurveTo(10.6, -2.7, 7.6, -5.9)
                .quadraticCurveTo(4.4, -9, -0.1, -9)
                .quadraticCurveTo(-4.6, -9, -7.7, -5.9)
                .closePath();
            this.graphics.addChildAt(this.graphics, 0);
        }
    }

    flower.prototype = new asset_shapes_pixi.drawRect(-32, -31, 64, 62.2);

    export class circle extends asset_shapes_pixi.DisplayObjectContainer {
        public graphics: PIXI.Graphics;

        constructor() {
            super();
            this.graphics = new asset_shapes_pixi.Graphics();
            this.graphics
                .beginFill("#FFFFFF")
                .lineStyle(0)
                .drawEllipse(-10.8, -10.8, 21.7, 21.7)
                .setTransform(0, 0, 2.949, 2.949);
            this.graphics.addChildAt(this.graphics, 0);
        }
    }

    circle.prototype = new asset_shapes_pixi.drawRect(-32, -32, 64, 64);

    export class blur_circle extends asset_shapes_pixi.DisplayObjectContainer {
        public graphics: PIXI.Graphics;

        constructor() {
            super();
            this.graphics = new asset_shapes_pixi.Graphics();
            this.graphics
                .beginFill("#FFFFFF")
                .lineStyle(0)
                .drawEllipse(-10.8, -10.8, 21.7, 21.7)
                .setTransform(0, 0, 3, 3)
            this.graphics.addChildAt(this.graphics, 0);
        }
    }

    blur_circle.prototype = new asset_shapes_pixi.drawRect(-32.5, -32.5, 65.1, 65.1);

    export class sakura1 extends asset_shapes_pixi.DisplayObjectContainer {
        public graphics: PIXI.Graphics;

        constructor() {
            super();
            this.graphics = new asset_shapes_pixi.Graphics();
            this.graphics
                .beginFill("#FFFFFF")
                .moveTo(26.4, 13.9)
                .bezierCurveTo(26.5, 11.8, 26.3, 9.5, 25.7, 7)
                .bezierCurveTo(24.6, 1.7, 22.5, 1.3, 21.1, 0.6)
                .bezierCurveTo(19.1, -0.5, 16.9, -0.3, 15.6, 1.6)
                .bezierCurveTo(11.7, 7.3, 11.7, 15.9, 12.9, 22.6)
                .bezierCurveTo(13.3, 25.3, 13.4, 27.7, 13.2, 29.7)
                .bezierCurveTo(12.8, 30, 12.4, 30.4, 12, 30.7)
                .bezierCurveTo(7, 34.8, 2.7, 37.2, 2.7, 37.2)
                .bezierCurveTo(2.7, 37.2, -2.1, 41.5, 1, 41.2)
                .bezierCurveTo(2.6, 41.1, 5.1, 41.9, 7.9, 42)
                .bezierCurveTo(10.7, 42.1, 13.7, 41.6, 16.3, 39)
                .bezierCurveTo(18.9, 36.4, 21.6, 32, 23.7, 27.3)
                .bezierCurveTo(25.6, 22.8, 26.8, 18.1, 26.4, 13.9)
                .closePath();
            this.graphics.addChildAt(this.graphics, 0);
        }
    }

    sakura1.prototype = new asset_shapes_pixi.drawRect(-15, -15, 15, 15);

    export class sakura2 extends asset_shapes_pixi.DisplayObjectContainer {
        public graphics: PIXI.Graphics;

        constructor() {
            super();
            this.graphics = new asset_shapes_pixi.Graphics();
            this.graphics
                .beginFill("#FFFFFF")
                .moveTo(2.2, 39.4)
                .bezierCurveTo(5.8, 39.8, 10.6, 36.3, 13.2, 34.1)
                .bezierCurveTo(17.6, 30.2, 21.9, 26.2, 26.6, 22.5)
                .bezierCurveTo(33.6, 16.9, 32.8, 6.7, 29, 3.1)
                .bezierCurveTo(21.7, -3.7, 9.8, 2.1, 5, 8.9)
                .bezierCurveTo(1.6, 13.7, 0.01, 19.5, 0, 25.3)
                .bezierCurveTo(0, 26.7, 0.4, 39.2, 2.2, 39.4)
                .closePath();
            this.graphics.addChildAt(this.graphics, 0);
        }
    }

    sakura2.prototype = new asset_shapes_pixi.drawRect(-15, -15, 15, 15);

    export class sakura3 extends asset_shapes_pixi.DisplayObjectContainer {
        public graphics: PIXI.Graphics;

        constructor() {
            super();
            this.graphics = new asset_shapes_pixi.Graphics();
            this.graphics
                .beginFill("#FFFFFF")
                .moveTo(35.3, 5.4)
                .bezierCurveTo(35.3, 5.3, 35.3, 5.2, 35.3, 5.2)
                .bezierCurveTo(35.3, 5.2, 35.3, 5.1, 35.3, 5.1)
                .bezierCurveTo(35.3, 4.1, 35, 3.2, 34.6, 2.5)
                .bezierCurveTo(34.6, 2.4, 34.5, 2.4, 34.5, 2.3)
                .bezierCurveTo(34.5, 2.3, 34.5, 2.3, 34.5, 2.3)
                .bezierCurveTo(33.9, 1.4, 33.1, 0.7, 32.2, 0.4)
                .bezierCurveTo(26.9, -1.7, 19.8, 3.8, 16.6, 7.5)
                .bezierCurveTo(10.7, 14.4, 9.3, 22.8, 5.9, 31)
                .bezierCurveTo(3.7, 36.2, 0.3, 40.8, 0.3, 40.8)
                .bezierCurveTo(-1.2, 42.4, 2.3, 41.8, 7, 38.1)
                .bezierCurveTo(9, 36.6, 12.5, 33.7, 16.2, 30.7)
                .bezierCurveTo(20.1, 27.5, 24.1, 24.1, 26.1, 21.9)
                .bezierCurveTo(30.3, 17.5, 32.9, 13.8, 34.3, 10.6)
                .bezierCurveTo(35.1, 8.7, 35.4, 7, 35.3, 5.4)
                .closePath();
            this.graphics.addChildAt(this.graphics, 0);
        }
    }

    sakura3.prototype = new asset_shapes_pixi.drawRect(-15, -15, 15, 15);


    export class sakura4 extends asset_shapes_pixi.DisplayObjectContainer {
        public graphics: PIXI.Graphics;

        constructor() {
            super();
            this.graphics = new asset_shapes_pixi.Graphics();
            this.graphics
                .beginFill("#FFFFFF")
                .moveTo(4.4, 0.9)
                .bezierCurveTo(9.4, 3, 13.6, 4.2, 16.8, 6.8)
                .bezierCurveTo(28.9, 17, 26.9, 22.7, 25.1, 25.9)
                .bezierCurveTo(22.8, 29.9, 7.9, 31, 4.2, 16.5)
                .bezierCurveTo(3.3, 13, 2.7, 8.6, 0.5, 3.1)
                .bezierCurveTo(-1.2, -1.1, 1.8, -0.2, 4.4, 0.9)
                .closePath();
            this.graphics.addChildAt(this.graphics, 0);
        }
    }

    sakura4.prototype = new asset_shapes_pixi.drawRect(-15, -15, 15, 15);

    export class sakura5 extends asset_shapes_pixi.DisplayObjectContainer {
        public graphics: PIXI.Graphics;

        constructor() {
            super();
            this.graphics = new asset_shapes_pixi.Graphics();
            this.graphics
                .beginFill("#FFFFFF")
                .moveTo(52.9, 2.7)
                .bezierCurveTo(50.9, -1, 44.7, 0.2, 41.4, 0.4)
                .bezierCurveTo(36.9, 0.7, 31.4, 1.3, 26.2, 1.9)
                .bezierCurveTo(21, 2.4, 14.5, 2.6, 9.2, 2.9)
                .lineTo(0, 3.3)
                .bezierCurveTo(4.7, 8.8, 9.6, 12.2, 14.7, 14.3)
                .bezierCurveTo(19.8, 16.4, 25, 17.1, 30, 16.9)
                .bezierCurveTo(35, 16.7, 39.9, 15.6, 43.9, 14)
                .bezierCurveTo(47.3, 12.6, 50.2, 10.9, 52.2, 8.9)
                .bezierCurveTo(54, 7.9, 54.8, 6.1, 52.9, 2.7)
                .closePath();
            this.graphics.addChildAt(this.graphics, 0);
        }
    }

    sakura5.prototype = new asset_shapes_pixi.drawRect(-15, -15, 15, 15);

    export class sakura6 extends asset_shapes_pixi.DisplayObjectContainer {
        public graphics: PIXI.Graphics;

        constructor() {
            super();
            this.graphics = new asset_shapes_pixi.Graphics();
            this.graphics
                .beginFill("#FFFFFF")
                .moveTo(1.2, 0)
                .bezierCurveTo(4.5, 0, 12.8, 0.4, 21, 2.4)
                .bezierCurveTo(28.2, 4.1, 41, 8, 40.1, 17.6)
                .bezierCurveTo(40.1, 17.9, 40, 18.1, 39.8, 18.3)
                .bezierCurveTo(39.6, 18.4, 39.4, 18.4, 39.3, 18.4)
                .bezierCurveTo(37.6, 18.4, 36.4, 19.1, 34.7, 18.5)
                .bezierCurveTo(30.2, 16.8, 24.9, 13.1, 19.5, 9.9)
                .bezierCurveTo(14.1, 6.6, 8.7, 3.7, 4.8, 2.9)
                .bezierCurveTo(-3.1, 1.5, 1.2, 0, 1.2, 0)
                .closePath();
            this.graphics.addChildAt(this.graphics, 0);
        }
    }

    sakura6.prototype = new asset_shapes_pixi.drawRect(-15, -15, 15, 15);
}

export default lib;
// Execute the following line if you have the necessary dependencies imported:
// const myTriangle = new lib.triangle();
// const myStar_10 = new lib.star_10();
// const my_star = new lib.star();
// const my_square = new lib.square();
// const my_reverse_blur_circle = new lib.reverse_blur_circle();
// const my_kirakira = new lib.kirakira();
// const my_kirakira2 = new lib.kirakira2();
// const my_heart = new lib.heart();
// const my_flower = new lib.flower();
// const my_circle = new lib.circle();
// const my_blur_circle = new lib.blur_circle();
// const my_sakura1 = new lib.sakura1();
// const my_sakura2 = new lib.sakura2();
// const my_sakura3 = new lib.sakura3();
// const my_sakura4 = new lib.sakura4();
// const my_sakura5 = new lib.sakura5();
// const my_sakura6 = new lib.sakura6();
