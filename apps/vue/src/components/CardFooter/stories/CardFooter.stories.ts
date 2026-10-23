import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { h } from 'vue';

import { CardFooter } from '../';
import { testDefaultCardFooter } from './CardFooter.play';
import CardFooterStory from './CardFooterStory.vue';

const meta: Meta<typeof CardFooterStory> = {
  title: 'Components/Estruturas/Card/CardFooter',
  component: CardFooter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof CardFooterStory>;

export const Default: Story = {
  render: (args) => h(CardFooterStory, args),
  play: testDefaultCardFooter,
};
