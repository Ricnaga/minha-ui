import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { h } from 'vue';

import { CardTitle } from '../';
import { testDefaultCardTitle } from './CardTitle.play';
import CardTitleStory from './CardTitleStory.vue';

const meta: Meta<typeof CardTitleStory> = {
  title: 'Components/Estruturas/Card/CardTitle',
  component: CardTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof CardTitleStory>;

export const Default: Story = {
  render: (args) => h(CardTitleStory, args),
  play: testDefaultCardTitle,
};
