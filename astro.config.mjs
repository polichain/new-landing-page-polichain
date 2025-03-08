import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://polichain.xyz',
  integrations: [
    tailwind(),
    mdx(),
    sitemap()
  ],
  image: {
    domains: ["utfs.io"]
  },
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  }
});