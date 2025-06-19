// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // Replace with your actual domain
  site: 'https://alliance-astro.vercel.app',

  integrations: [
    sitemap({
      customPages: [
        'https://alliance-astro.vercel.app',
        'https://alliance-astro.vercel.app/about-us',
        'https://alliance-astro.vercel.app/gallery',
        'https://alliance-astro.vercel.app/shop',
        'https://alliance-astro.vercel.app/services',
        'https://alliance-astro.vercel.app/contact-us',
        'https://alliance-astro.vercel.app/parts-repair',
        'https://alliance-astro.vercel.app/notary-service',
        'https://alliance-astro.vercel.app/home-assesment',
        'https://alliance-astro.vercel.app/walker-gallery',
        'https://alliance-astro.vercel.app/wheelchair-gallery',
        'https://alliance-astro.vercel.app/crutches',
        'https://alliance-astro.vercel.app/suction-machine',
        'https://alliance-astro.vercel.app/privacy-policy',
        'https://alliance-astro.vercel.app/terms-conditions'
      ],
      filter: (page) => {
        // Exclude any pages you don't want in the sitemap
        return !page.includes('/admin/') && !page.includes('/draft/');
      },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],

  output: 'static',

  build: {
    assets: 'assets',
    inlineStylesheets: 'auto',
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      }
    },
    css: {
      devSourcemap: true,
      transformer: "lightningcss",
    }
  },

  compressHTML: true,
  scopedStyleStrategy: 'attribute',
  trailingSlash: 'ignore',

  // experimental: {
  //   optimizeHoistedScript: true
  // }
  server: {
    port: 3000,
    host: true
  },

  adapter: vercel()
});
