import type { Meta, StoryObj } from '@storybook/svelte-vite';

import { testDefaultCardActions } from './CardActions.play';
import CardActionsStory from './CardActionsStory.svelte';

const meta: Meta<typeof CardActionsStory> = {
  title: 'Components/Estruturas/Card/CardActions',
  component: CardActionsStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardActionsStory>;

export const Default: Story = {
  play: testDefaultCardActions,
};
