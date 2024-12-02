// @ts-check
import {defineConfig} from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "particles",
      social: {
        github: "https://github.com/Akagi-Kazeno/particle-gochiusa",
      },
      sidebar: [],
      customCss: ['./src/tailwind.css'],
    }),
    tailwind({applyBaseStyles: false}),
  ],
  site: 'https://akagi-kazeno.github.io',
  base: '/particle-gochiusa',
});
