import type { Meta, StoryObj } from '@storybook/svelte-vite';

import ErrorState from '../ErrorState.svelte';
import { testDefaultErrorState } from './ErrorState.play';

const meta: Meta<typeof ErrorState> = {
  title: 'Components/Feedback/ErrorState',
  component: ErrorState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorState>;

export const Default: Story = {
  play: testDefaultErrorState,
};
