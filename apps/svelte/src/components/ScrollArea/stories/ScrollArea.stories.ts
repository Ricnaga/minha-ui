import type { Meta, StoryObj } from '@storybook/svelte-vite';

import { testDefaultScrollArea } from './ScrollArea.play';
import ScrollAreaSizesStory from './ScrollAreaSizesStory.svelte';
import ScrollAreaStory from './ScrollAreaStory.svelte';

const meta: Meta<typeof ScrollAreaStory> = {
  title: 'Components/Estruturas/ScrollArea',
  component: ScrollAreaStory,
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
    layout: { control: false },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollAreaStory>;

type SizesStory = StoryObj<typeof ScrollAreaSizesStory>;

export const Default: Story = {
  play: testDefaultScrollArea,
};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    layout: 'row',
    label: 'Lista horizontal de itens',
  },
};

export const Both: Story = {
  args: {
    orientation: 'both',
    layout: 'row',
    label: 'Lista com rolagem vertical e horizontal',
  },
};

export const Sizes: SizesStory = {
  render: () => ({ Component: ScrollAreaSizesStory }),
};

export const Rtl: Story = {
  args: { dir: 'rtl', label: 'Lista de itens (RTL)' },
};
