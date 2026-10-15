import type { Meta, StoryObj } from '@storybook/react-vite';

import type { ScrollAreaProps } from '../scroll-area.types';
import { ScrollArea } from '../ScrollArea';
import { testDefaultScrollArea } from './ScrollArea.play';

function Items({ count = 20 }: { count?: number }) {
  return (
    <ul className="space-y-2 p-2">
      {Array.from({ length: count }, (_, index) => (
        <li key={index} className="rounded bg-neutral-800 p-2 text-neutral-100">
          Item {index + 1}
        </li>
      ))}
    </ul>
  );
}

function WideItems({ count = 20 }: { count?: number }) {
  return (
    <ul className="flex gap-2 p-2">
      {Array.from({ length: count }, (_, index) => (
        <li key={index} className="rounded bg-neutral-800 p-2 text-neutral-100">
          Item {index + 1}
        </li>
      ))}
    </ul>
  );
}

const meta: Meta<ScrollAreaProps> = {
  title: 'Components/Estruturas/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    className: 'h-48 w-64',
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
type Story = StoryObj<ScrollAreaProps>;

export const Default: Story = {
  render: (args) => (
    <ScrollArea {...args} aria-label="Lista de itens">
      <Items />
    </ScrollArea>
  ),
  play: testDefaultScrollArea,
};

export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
  render: (args) => (
    <ScrollArea {...args}>
      <WideItems />
    </ScrollArea>
  ),
};

export const Both: Story = {
  args: { orientation: 'both' },
  render: (args) => (
    <ScrollArea {...args}>
      <WideItems />
    </ScrollArea>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size} className="flex flex-col gap-1 text-neutral-400">
          <span>{size}</span>
          <ScrollArea {...args} size={size}>
            <Items count={12} />
          </ScrollArea>
        </div>
      ))}
    </div>
  ),
};

export const Rtl: Story = {
  render: (args) => (
    <ScrollArea {...args} dir="rtl">
      <Items />
    </ScrollArea>
  ),
};
