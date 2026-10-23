import type { Meta, StoryObj } from '@storybook/svelte-vite';

import EmptyState from '../EmptyState.svelte';
import { testDefaultEmptyState } from './EmptyState.play';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/Feedback/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  play: testDefaultEmptyState,
};
