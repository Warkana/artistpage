// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the real production domain before launch (needed for
// correct sitemap.xml / canonical / Open Graph URLs).
const SITE_URL = 'https://julia-polishchuk.art';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'ua',
    locales: ['ua', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
