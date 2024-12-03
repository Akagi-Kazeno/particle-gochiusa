import * as PIXI from 'pixi.js';
import {initializePixiApp} from "@/particles/utils/commonUtils.ts";

export async function initSakuraParticle() {
  const app = await initializePixiApp();

  const container = new PIXI.Container();
  app.stage.addChild(container);

  const petals: PIXI.Graphics[] = [];
  const colors = [0xFEC5E5, 0xFBA3D9, 0xFB9BCF, 0xFDABD6];
  for (let i = 0; i < 20; i++) {
    const petal = new PIXI.Graphics();
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    petal.fill(randomColor)
      .bezierCurveTo(14.1, 4.5, 20.4, 6.3, 25.2, 10.2)
      .bezierCurveTo(43.35, 25.5, 40.35, 34.05, 37.65, 38.85)
      .bezierCurveTo(34.2, 44.85, 11.85, 46.5, 6.3, 24.75)
      .bezierCurveTo(4.95, 19.5, 4.05, 12.9, 0.75, 4.65)
      .bezierCurveTo(-1.8, -1.65, 2.7, -0.3, 6.6, 1.35)
      .fill();
    petal.alpha = 1;
    petal.x = app.screen.width + Math.random() * app.screen.width;
    petal.y = -Math.random() * app.screen.height;
    petal.rotation = Math.random() * Math.PI * 2;
    petal.scale.set(0.5 + Math.random() * 0.5);
    petal.pivot.set(petal.width / 2, petal.height / 2);
    container.addChild(petal);
    petals.push(petal);
  }

  const animation = () => {
    for (const petal of petals) {
      petal.x -= 1 + Math.random() * 2;
      petal.y += 0.75 + Math.random();
      petal.rotation += 0.0125;
      petal.scale.x = Math.max(0.325, 0.5 + Math.cos(petal.y / 50) * 0.5);
      petal.scale.y = Math.max(0.325, 0.5 + Math.sin(petal.y / 50) * 0.5);
      if (petal.x < -petal.width || petal.y > app.screen.height) {
        petal.x = app.screen.width + Math.random() * app.screen.width;
        petal.y = -Math.random() * app.screen.height;
      }
    }
  };

  app.ticker.add(animation);
}
