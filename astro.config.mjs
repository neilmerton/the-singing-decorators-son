// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import netlify from "@astrojs/netlify";

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
  },
  adapter: netlify(),
  image: {
    domains: [
      'localhost',
      'the-singing-decorators-son.netlify.app',
    ],
  },
});