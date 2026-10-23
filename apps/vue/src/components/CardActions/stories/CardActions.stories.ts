import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { h } from 'vue';

import { CardActions } from '../';
import { testDefaultCardActions } from './CardActions.play';
import CardActionsStory from './CardActionsStory.vue';

const meta: Meta<typeof CardActionsStory> = {
  title: 'Components/Estruturas/Card/CardActions',
  component: CardActions,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof CardActionsStory>;

export const Default: Story = {
  render: (args) => h(CardActionsStory, args),
  play: testDefaultCardActions,
};
