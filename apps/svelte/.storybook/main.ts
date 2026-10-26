import type { StorybookConfig } from '@storybook/svelte-vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: [
    '../src/components/**/stories/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/runes/**/stories/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/icons/**/stories/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/utils/**/stories/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    'storybook/viewport',
  ],
  framework: '@storybook/svelte-vite',
  viteFinal: async (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(tsconfigPaths({ projects: ['./tsconfig.app.json'] }));
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@/components': new URL('../src/components', import.meta.url).pathname,
      '@/runes': new URL('../src/runes', import.meta.url).pathname,
      '@/icons': new URL('../src/icons', import.meta.url).pathname,
      '@/theme': new URL('../src/theme', import.meta.url).pathname,
      '@/infra': new URL('../src/infra', import.meta.url).pathname,
      '@/types': new URL('../src/types', import.meta.url).pathname,
    };
    return config;
  },
};
export default config;
