import type { Meta, StoryObj } from '@storybook/svelte-vite';

import { testDefaultCardTitle } from './CardTitle.play';
import CardTitleStory from './CardTitleStory.svelte';

const meta: Meta<typeof CardTitleStory> = {
  title: 'Components/Estruturas/Card/CardTitle',
  component: CardTitleStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardTitleStory>;

export const Default: Story = {
  play: testDefaultCardTitle,
};
