import type { Meta, StoryObj } from '@storybook/svelte-vite';

import { testDefaultCardFooter } from './CardFooter.play';
import CardFooterStory from './CardFooterStory.svelte';

const meta: Meta<typeof CardFooterStory> = {
  title: 'Components/Estruturas/Card/CardFooter',
  component: CardFooterStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardFooterStory>;

export const Default: Story = {
  play: testDefaultCardFooter,
};
