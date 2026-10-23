import type { Meta, StoryObj } from '@storybook/svelte-vite';

import { fn } from 'storybook/test';

import { testDefaultIconButton } from './IconButton.play';
import IconButtonStory from './IconButtonStory.svelte';

const meta: Meta<typeof IconButtonStory> = {
  title: 'Components/Interação/IconButton',
  component: IconButtonStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outline', 'ghost'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'error'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    radius: {
      control: { type: 'select' },
      options: ['full'],
    },
    isLoading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    'aria-label': 'Informações',
    size: 'medium',
    radius: 'full',
    variant: 'contained',
    color: 'primary',
    isLoading: false,
    onclick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof IconButtonStory>;

export const Default: Story = {
  play: testDefaultIconButton,
};
