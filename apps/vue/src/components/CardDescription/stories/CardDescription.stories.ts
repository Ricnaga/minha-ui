import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { h } from 'vue';

import { CardDescription } from '../';
import { testDefaultCardDescription } from './CardDescription.play';
import CardDescriptionStory from './CardDescriptionStory.vue';

const meta: Meta<typeof CardDescriptionStory> = {
  title: 'Components/Estruturas/Card/CardDescription',
  component: CardDescription,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof CardDescriptionStory>;

export const Default: Story = {
  render: (args) => h(CardDescriptionStory, args),
  play: testDefaultCardDescription,
};
