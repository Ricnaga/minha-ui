import type { Meta, StoryObj } from '@storybook/svelte-vite';

import { fn } from 'storybook/test';

import { testDefaultButton } from './Button.play';
import ButtonStory from './ButtonStory.svelte';

const meta: Meta<typeof ButtonStory> = {
  title: 'Components/Interação/Button',
  component: ButtonStory,
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
      options: ['none', 'small', 'medium', 'large'],
    },
  },
  args: { onclick: fn(), children: 'Button' },
};

export default meta;
type Story = StoryObj<typeof ButtonStory>;

export const Default: Story = {
  play: testDefaultButton,
};
