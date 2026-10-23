import type { Meta, StoryObj } from '@storybook/svelte-vite';

import { testDefaultCardImage } from './CardImage.play';
import CardImageStory from './CardImageStory.svelte';

const meta: Meta<typeof CardImageStory> = {
  title: 'Components/Estruturas/Card/CardImage',
  component: CardImageStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
    },
    aspect: {
      control: { type: 'select' },
      options: ['auto', 'square', 'video', 'portrait'],
    },
  },
  args: {
    class: 'w-64',
  },
};

export default meta;
type Story = StoryObj<typeof CardImageStory>;

export const Default: Story = {
  play: testDefaultCardImage,
};
