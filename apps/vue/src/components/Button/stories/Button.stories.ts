import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { Button } from '../';
import type { ButtonProps } from '../button.types';
import { testDefaultButton } from './Button.play';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {},
  play: testDefaultButton,
};
