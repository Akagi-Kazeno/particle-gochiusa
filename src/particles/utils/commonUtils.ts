import * as PIXI from 'pixi.js';

export async function initializePixiApp() {
  // init pixi app and move it to the center of the screen
  const app = new PIXI.Application();
  await app.init({antialias: true, resizeTo: {width: 800, height: 600}} as any);
  const pixiContainer = document.getElementById('pixi-container');
  pixiContainer!.style.display = 'flex';
  pixiContainer!.style.justifyContent = 'center';
  pixiContainer!.appendChild(app.canvas);
  return app;
}