import type { Meta, StoryObj } from '@storybook/svelte-vite';

import { fn } from 'storybook/test';

import { testDefaultBackdrop } from './Backdrop.play';
import BackdropStory from './BackdropStory.svelte';

const meta: Meta<typeof BackdropStory> = {
  title: 'Components/Estruturas/Backdrop',
  component: BackdropStory,
  parameters: {
    layout: 'centered',
  },
  args: {
    zIndex: 1000,
    isLoading: false,
    onClose: fn(),
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BackdropStory>;

export const Default: Story = {
  play: testDefaultBackdrop,
};
