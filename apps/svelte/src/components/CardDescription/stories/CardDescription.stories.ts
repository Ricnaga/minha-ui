import type { Meta, StoryObj } from '@storybook/svelte-vite';

import { testDefaultCardDescription } from './CardDescription.play';
import CardDescriptionStory from './CardDescriptionStory.svelte';

const meta: Meta<typeof CardDescriptionStory> = {
  title: 'Components/Estruturas/Card/CardDescription',
  component: CardDescriptionStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardDescriptionStory>;

export const Default: Story = {
  play: testDefaultCardDescription,
};
