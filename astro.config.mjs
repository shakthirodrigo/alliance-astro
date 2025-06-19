// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // Replace with your actual domain
  site: 'https://alliancemedical.com',

  integrations: [
    sitemap({
      customPages: [
        'https://alliancemedical.com',
        'https://alliancemedical.com/about-us',
        'https://alliancemedical.com/gallery',
        'https://alliancemedical.com/shop',
        'https://alliancemedical.com/services',
        'https://alliancemedical.com/contact-us',
        'https://alliancemedical.com/parts-repair',
        'https://alliancemedical.com/notary-service',
        'https://alliancemedical.com/home-assesment',
        'https://alliancemedical.com/walker-gallery',
        'https://alliancemedical.com/wheelchair-gallery',
        'https://alliancemedical.com/crutches',
        'https://alliancemedical.com/suction-machine',
        'https://alliancemedical.com/privacy-policy',
        'https://alliancemedical.com/terms-conditions'
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