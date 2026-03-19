import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      maxWorkers: 4,
      testTimeout: 10000,
      hookTimeout: 10000,
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html'],
        include: ['src/components/**', 'src/hooks/**'],
        exclude: [
          'node_modules/**',
          'src/**/*.stories.{ts,tsx}',
          'src/**/*.play.{ts,tsx}',
          'src/types/**',
          'src/infra/**',
          'src/theme/**',
          'src/icons/**',
          'src/utils/**',
          'src/components/**/types/**',
          '**/*.d.ts',
          '**/*.config.*',
          '**/mockData/**',
          '**/mocks/**',
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
