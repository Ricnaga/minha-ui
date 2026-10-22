import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { h } from 'vue';

import ContextStory from './ContextStory.vue';
import { testDefaultContext } from './useContext.play';

const meta: Meta<typeof ContextStory> = {
  title: 'Composables/useContext',
  component: ContextStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContextStory>;

export const Default: Story = {
  render: () => h(ContextStory),
  play: testDefaultContext,
};
