import type { Meta, StoryObj } from '@storybook/svelte-vite';

import { testDefaultRipple } from './useRipple.play';
import Component from './useRipple.stories.svelte';

const meta: Meta<typeof Component> = {
  title: 'Runes/useRipple',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  play: testDefaultRipple,
};
