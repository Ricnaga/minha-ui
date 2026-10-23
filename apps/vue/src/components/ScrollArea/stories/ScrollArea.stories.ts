import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { h } from 'vue';

import { ScrollArea } from '../';
import { testDefaultScrollArea } from './ScrollArea.play';
import ScrollAreaHorizontalStory from './ScrollAreaHorizontalStory.vue';
import ScrollAreaSizesStory from './ScrollAreaSizesStory.vue';
import ScrollAreaStory from './ScrollAreaStory.vue';

const meta: Meta<typeof ScrollAreaStory> = {
  title: 'Components/Estruturas/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    class: 'h-48 w-64',
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal', 'both'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollAreaStory>;

export const Default: Story = {
  render: (args) => h(ScrollAreaStory, args),
  play: testDefaultScrollArea,
};

export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
  render: (args) => h(ScrollAreaHorizontalStory, args),
};

export const Both: Story = {
  args: { orientation: 'both' },
  render: (args) =>
    h(ScrollAreaHorizontalStory, {
      ...args,
      label: 'Lista com rolagem vertical e horizontal',
    }),
};

export const Sizes: Story = {
  render: () => h(ScrollAreaSizesStory),
};

export const Rtl: Story = {
  render: (args) =>
    h(ScrollAreaStory, {
      ...args,
      dir: 'rtl',
      label: 'Lista de itens (RTL)',
    }),
};
