import * as PIXI from 'pixi.js';
import {initializePixiApp} from "@/particles/utils/commonUtils.ts";

export async function initParticleGochiusa10th() {
  const app = await initializePixiApp();

  const gradient = new PIXI.Graphics();
  app.stage.addChild(gradient);

  // create a gradient that transitions between two colors
  let hue1 = 0;
  let hue2 = 30;
  const saturation = 100;
  const lightness = 90;
  const transitionSpeed = 0.25;

  function drawGradient() {
    gradient.clear();
    const width = app.screen.width;
    const height = app.screen.height;

    const canvas = document.createElement('canvas');
    canvas.width = 2;
    canvas.height = 2;
    const ctx = canvas.getContext('2d')!;
    const gradientFill = ctx.createLinearGradient(0, 2, 2, 0);
    const color1 = `hsl(${hue1}, ${saturation}%, ${lightness}%)`;
    const color2 = `hsl(${hue2}, ${saturation}%, ${lightness}%)`;
    gradientFill.addColorStop(0, color1);
    gradientFill.addColorStop(1, color2);
    ctx.fillStyle = gradientFill;
    ctx.fillRect(0, 0, 2, 2);
    // create a texture from the canvas
    const texture = PIXI.Texture.from(canvas);
    const sprite = new PIXI.Sprite(texture);
    sprite.width = width;
    sprite.height = height;
    // add the sprite to the gradient container
    gradient.addChild(sprite);
  }

  function updateColors() {
    hue1 = (hue1 + transitionSpeed) % 360;
    hue2 = (hue2 + transitionSpeed) % 360;
    drawGradient();
  }

  app.ticker.add(updateColors);
  app.start();
}