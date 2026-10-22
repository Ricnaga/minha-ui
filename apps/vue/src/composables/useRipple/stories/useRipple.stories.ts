import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { h } from 'vue';

import RippleDemo from './RippleDemo.vue';
import { testDefaultRipple } from './useRipple.play';

const meta: Meta<typeof RippleDemo> = {
  title: 'Composables/useRipple',
  component: RippleDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RippleDemo>;

export const Default: Story = {
  render: () => h(RippleDemo),
  play: testDefaultRipple,
};
