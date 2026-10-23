import type { Meta, StoryObj } from '@storybook/svelte-vite';

import { testCompositionCard, testDefaultCard } from './Card.play';
import CardCompositionStory from './CardCompositionStory.svelte';
import CardStory from './CardStory.svelte';

const meta: Meta<typeof CardStory> = {
  title: 'Components/Estruturas/Card',
  component: CardStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardStory>;

export const Default: Story = {
  play: testDefaultCard,
};

type CompositionStory = StoryObj<typeof CardCompositionStory>;

export const Composition: CompositionStory = {
  render: () => ({ Component: CardCompositionStory }),
  play: testCompositionCard,
};
