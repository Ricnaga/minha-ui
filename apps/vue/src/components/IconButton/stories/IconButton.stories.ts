import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { fn } from 'storybook/test';
import { h } from 'vue';

import { IconButton } from '../';
import { testDefaultIconButton } from './IconButton.play';
import IconButtonStory from './IconButtonStory.vue';

const meta: Meta<typeof IconButtonStory> = {
  title: 'Components/Interação/IconButton',
  component: IconButton,
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
    onClick: {
      action: 'clicked',
    },
  },
  args: {
    'aria-label': 'Informações',
    size: 'medium',
    radius: 'full',
    variant: 'contained',
    color: 'primary',
    isLoading: false,
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof IconButtonStory>;

export const Default: Story = {
  render: (args) => h(IconButtonStory, args),
  play: testDefaultIconButton,
};
