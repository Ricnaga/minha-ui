import type { Meta, StoryObj } from '@storybook/svelte-vite';

import { testDefaultSkeleton } from './Skeleton.play';
import SkeletonStory from './SkeletonStory.svelte';

const meta: Meta<typeof SkeletonStory> = {
  title: 'Components/Feedback/Skeleton',
  component: SkeletonStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: { type: 'select' },
      options: ['rounded', 'square', 'circle'],
      description: 'Formato do Skeleton',
      table: {
        type: { summary: '"rounded" | "square" | "circle"' },
        defaultValue: { summary: 'rounded' },
      },
    },
    class: {
      control: 'text',
      description: 'Classe Tailwind opcional para layout/customização',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    shape: 'rounded',
    class: 'h-14 w-32',
  },
};

export default meta;
type Story = StoryObj<typeof SkeletonStory>;

export const Default: Story = {
  play: testDefaultSkeleton,
};
