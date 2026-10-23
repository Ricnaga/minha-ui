import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { h } from 'vue';

import { Card } from '../';
import { testDefaultCard } from './Card.play';
import { testCompositionCard } from './CardComposition.play';
import CardCompositionStory from './CardCompositionStory.vue';
import CardStory from './CardStory.vue';

const meta: Meta<typeof CardStory> = {
  title: 'Components/Estruturas/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof CardStory>;

export const Default: Story = {
  render: (args) => h(CardStory, args),
  play: testDefaultCard,
};

export const Composition: Story = {
  render: (args) => h(CardCompositionStory, args),
  play: testCompositionCard,
};
