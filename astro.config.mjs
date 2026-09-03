import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.chrisjohnson.solutions',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
