import type { Meta, StoryObj } from '@storybook/svelte-vite';

import { Spinner } from '../';
import type { SpinnerProps } from '../spinner.types';
import { testDefaultSpinner } from './Spinner.play';

const meta: Meta<SpinnerProps> = {
  title: 'Components/Feedback/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'error'],
      description: 'Cor do spinner (semântico)',
      table: {
        type: {
          summary:
            '"primary" | "secondary" | "success" | "info" | "warning" | "error"',
        },
        defaultValue: { summary: 'primary' },
      },
    },
    thickness: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Espessura do traço do spinner',
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: 'md' },
      },
    },
    class: {
      control: 'text',
      description: 'Classe Tailwind para controlar layout (w/h) do spinner',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    class: 'size-24',
    color: 'primary',
    thickness: 'md',
  },
};

export default meta;
type Story = StoryObj<SpinnerProps>;

export const Default: Story = {
  play: testDefaultSpinner,
};
