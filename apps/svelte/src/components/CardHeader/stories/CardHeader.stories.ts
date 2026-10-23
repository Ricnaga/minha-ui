import type { Meta, StoryObj } from '@storybook/svelte-vite';

import { testDefaultCardHeader } from './CardHeader.play';
import CardHeaderStory from './CardHeaderStory.svelte';

const meta: Meta<typeof CardHeaderStory> = {
  title: 'Components/Estruturas/Card/CardHeader',
  component: CardHeaderStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardHeaderStory>;

export const Default: Story = {
  play: testDefaultCardHeader,
};
