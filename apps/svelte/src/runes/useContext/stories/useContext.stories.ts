import type { Meta, StoryObj } from '@storybook/svelte-vite';

import { testDefaultContext } from './useContext.play';
import Component from './useContext.stories.svelte';

const meta: Meta<typeof Component> = {
  title: 'Runes/useContext',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Component> = {
  play: testDefaultContext,
};
