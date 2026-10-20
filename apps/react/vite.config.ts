/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths({ projects: ['./tsconfig.app.json'] }),
  ],
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, './src/components'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/icons': path.resolve(__dirname, './src/icons'),
      '@/theme': path.resolve(__dirname, './src/theme'),
      '@/infra': path.resolve(__dirname, './src/infra'),
      '@/types': path.resolve(__dirname, './src/types'),
    },
  },
});
