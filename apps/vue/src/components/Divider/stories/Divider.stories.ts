import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { h } from 'vue';

import { Divider } from '../';
import { testDefaultDivider, testVerticalDivider } from './Divider.play';
import DividerStory from './DividerStory.vue';

const meta: Meta<typeof DividerStory> = {
  title: 'Components/Estruturas/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    inset: {
      control: { type: 'select' },
      options: ['none', 'left', 'right', 'center'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DividerStory>;

export const Default: Story = {
  args: {
    class: 'w-full min-w-40',
  },
  render: (args) => h(DividerStory, args),
  play: testDefaultDivider,
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    class: 'h-40',
  },
  render: (args) => h(DividerStory, args),
  play: testVerticalDivider,
};
