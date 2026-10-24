import { PhInfo } from '@phosphor-icons/vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { h } from 'vue';

import Input from '../Input.vue';
import { testDefaultInput, testWithIconsInput } from './Input.play';

const meta = {
  title: 'Components/Formularios/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    variant: { control: { type: 'radio' }, options: ['underline', 'outline'] },
    startIcon: { control: false },
    endIcon: { control: false },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
    },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  args: {
    label: 'Nome',
    variant: 'outline',
    type: 'text',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: testDefaultInput,
};

export const WithIcons: Story = {
  args: {},
  render: (args: Record<string, unknown>) =>
    h(Input, args, {
      startIcon: () => h(PhInfo),
      endIcon: () => h(PhInfo),
    }),
  play: testWithIconsInput,
};

export const Responsive: Story = {
  globals: { viewport: { value: 'mobile', isRotated: false } },
  parameters: { layout: 'padded' },
  args: { label: 'Nome', variant: 'outline' },
};
