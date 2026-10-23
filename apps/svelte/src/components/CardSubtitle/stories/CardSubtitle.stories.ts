import type { Meta, StoryObj } from '@storybook/svelte-vite';

import { testDefaultCardSubtitle } from './CardSubtitle.play';
import CardSubtitleStory from './CardSubtitleStory.svelte';

const meta: Meta<typeof CardSubtitleStory> = {
  title: 'Components/Estruturas/Card/CardSubtitle',
  component: CardSubtitleStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardSubtitleStory>;

export const Default: Story = {
  play: testDefaultCardSubtitle,
};
