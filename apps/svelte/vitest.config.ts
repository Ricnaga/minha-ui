import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default mergeConfig(
  viteConfig,
  defineConfig({
    // Svelte 5 resolve o build de SSR por padrão; sem a condição "browser"
    // os componentes quebram no jsdom.
    resolve: {
      conditions: ['browser'],
    },
    test: {
      globals: true,
      environment: 'jsdom',
      maxWorkers: 4,
      testTimeout: 10000,
      hookTimeout: 10000,
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html', 'lcov'],
        include: ['src/components/**', 'src/runes/**'],
        exclude: [
          'node_modules/**',
          'src/**/*.stories.{ts,tsx}',
          'src/**/*.play.{ts,tsx}',
          'src/types/**',
          'src/theme/**',
          'src/**/*.svelte',
          '**/*.d.ts',
          '**/*.config.*',
          '**/__snapshots__/**',
          '**/index.ts',
        ],
      },
      projects: [
        {
          extends: true,
          test: {
            name: 'unit',
            include: ['src/**/__tests__/*.test.{ts,tsx}'],
            exclude: ['src/**/*.snap'],
            setupFiles: ['./vitest.setup.ts'],
          },
        },
        {
          extends: true,
          plugins: [
            storybookTest({
              configDir: path.join(dirname, '.storybook'),
            }),
          ],
          test: {
            name: 'storybook',
            testTimeout: 30000,
            browser: {
              enabled: true,
              headless: true,
              provider: playwright({}),
              instances: [
                {
                  browser: 'chromium',
                },
              ],
            },
            setupFiles: ['.storybook/vitest.setup.ts'],
          },
        },
      ],
    },
  }),
);
