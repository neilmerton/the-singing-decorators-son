// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.bunny(),
        name: "Fraunces",
        cssVariable: "--font-heading"
      },
      {
        provider: fontProviders.bunny(),
        name: "Rubik",
        cssVariable: "--font-body"
      }
    ]
  }
});
