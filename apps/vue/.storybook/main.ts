import type { StorybookConfig } from '@storybook/vue3-vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: [
    '../src/components/**/stories/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/composables/**/stories/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    'storybook/viewport',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      // `vue-docgen-api` foi deprecado no Storybook 10.6.
      docgen: {
        plugin: 'vue-component-meta',
        tsconfig: 'tsconfig.app.json',
      },
    },
  },
  viteFinal: async (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(tsconfigPaths({ projects: ['./tsconfig.app.json'] }));
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@/components': new URL('../src/components', import.meta.url).pathname,
      '@/composables': new URL('../src/composables', import.meta.url).pathname,
      '@/theme': new URL('../src/theme', import.meta.url).pathname,
      '@/types': new URL('../src/types', import.meta.url).pathname,
    };
    return config;
  },
};
export default config;
