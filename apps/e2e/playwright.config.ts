import { defineConfig, devices } from '@playwright/test';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  outputDir: path.join(dirname, 'test-results'),
  testMatch: '**/*.spec.ts',
  testIgnore: ['**/*.test.ts', '**/*.test.tsx'],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI
    ? [
        ['github'],
        ['html', { outputFolder: path.join(dirname, 'playwright-report') }],
      ]
    : [['list']],
  use: {
    baseURL:
      process.env.E2E_TEST_TYPE === 'storybook'
        ? 'http://localhost:6006'
        : process.env.E2E_APP === 'vue'
          ? 'http://localhost:6007'
          : process.env.E2E_APP === 'svelte'
            ? 'http://localhost:6008'
            : 'http://localhost:5173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  webServer:
    process.env.E2E_TEST_TYPE === 'storybook'
      ? {
          command:
            process.env.E2E_APP === 'vue'
              ? 'pnpm --filter @minha-ui/vue build-storybook && pnpm --filter @minha-ui/vue exec vite preview --outDir storybook-static --port 6007'
              : process.env.E2E_APP === 'svelte'
                ? 'pnpm --filter @minha-ui/svelte build-storybook && pnpm --filter @minha-ui/svelte exec vite preview --outDir storybook-static --port 6008'
                : 'pnpm --filter @minha-ui/react build-storybook && pnpm --filter @minha-ui/react exec vite preview --outDir storybook-static --port 6006',
          url:
            process.env.E2E_APP === 'vue'
              ? 'http://localhost:6007/iframe.html'
              : process.env.E2E_APP === 'svelte'
                ? 'http://localhost:6008/iframe.html'
                : 'http://localhost:6006/iframe.html',
          reuseExistingServer: !process.env.CI,
          timeout: 180_000,
        }
      : undefined,
  projects: [
    {
      name: 'react',
      testDir: path.join(dirname, 'react', 'tests'),
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'vue',
      testDir: path.join(dirname, 'vue', 'tests'),
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'svelte',
      testDir: path.join(dirname, 'svelte', 'tests'),
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
