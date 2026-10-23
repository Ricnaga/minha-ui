import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { h } from 'vue';

import { CardSubtitle } from '../';
import { testDefaultCardSubtitle } from './CardSubtitle.play';
import CardSubtitleStory from './CardSubtitleStory.vue';

const meta: Meta<typeof CardSubtitleStory> = {
  title: 'Components/Estruturas/Card/CardSubtitle',
  component: CardSubtitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof CardSubtitleStory>;

export const Default: Story = {
  render: (args) => h(CardSubtitleStory, args),
  play: testDefaultCardSubtitle,
};
