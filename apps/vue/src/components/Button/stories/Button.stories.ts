import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { fn } from 'storybook/test';
import { h } from 'vue';

import { Button } from '../';
import { testDefaultButton, testLoadingButton } from './Button.play';
import ButtonStory from './ButtonStory.vue';

const meta: Meta<typeof ButtonStory> = {
  title: 'Components/Interação/Button',
  component: Button,
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

    isLoading: {
      control: 'boolean',
      description: 'Desabilita o botão e exibe o Spinner no lugar do conteúdo',
    },

    disabled: {
      control: 'boolean',
    },
  },
  args: {
    onClick: fn(),
    children: 'Button',
    isLoading: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof ButtonStory>;

export const Default: Story = {
  render: (args) => h(ButtonStory, args),
  play: testDefaultButton,
};

export const Loading: Story = {
  args: { isLoading: true },
  render: (args) => h(ButtonStory, args),
  play: testLoadingButton,
};
