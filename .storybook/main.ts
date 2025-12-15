import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/components/**/stories/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/hooks/**/stories/*.stories.@(js|jsx|mjs|ts|tsx)",
    // "../src/types/**/stories/*.stories.@(js|jsx|mjs|ts|tsx)",
    // "../src/utils/**/stories/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/react-vite",
};
export default config;
