/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    tsconfigPaths({ projects: ['./tsconfig.app.json'] }),
  ],
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, './src/components'),
      '@/composables': path.resolve(__dirname, './src/composables'),
      '@/theme': path.resolve(__dirname, './src/theme'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@/infra': path.resolve(__dirname, './src/infra'),
    },
  },
});
