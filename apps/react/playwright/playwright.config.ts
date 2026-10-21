import { defineConfig, devices } from '@playwright/test';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  testDir: path.join(dirname, 'tests'),
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
        : 'http://localhost:5173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  // Serve a build estática do Storybook (e não o dev server) para evitar
  // compilação on-demand, que deixa os specs instáveis sob concorrência.
  webServer:
    process.env.E2E_TEST_TYPE === 'storybook'
      ? {
          command:
            'pnpm build-storybook && pnpm exec vite preview --outDir storybook-static --port 6006',
          cwd: path.join(dirname, '..'),
          url: 'http://localhost:6006/iframe.html',
          reuseExistingServer: !process.env.CI,
          timeout: 180_000,
        }
      : undefined,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
