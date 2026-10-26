/// <reference types="vitest/config" />
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    svelte(),
    tailwindcss(),
    tsconfigPaths({ projects: ['./tsconfig.app.json'] }),
  ],
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, './src/components'),
      '@/runes': path.resolve(__dirname, './src/runes'),
      '@/theme': path.resolve(__dirname, './src/theme'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@/infra': path.resolve(__dirname, './src/infra'),
    },
  },
});
