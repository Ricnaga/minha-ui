import type { StoryObj } from '@storybook/svelte-vite';

import { testDefaultInput, testWithIconsInput } from './Input.play';
import InputStory from './InputStory.svelte';

const meta = {
  title: 'Components/Formularios/Input',
  component: InputStory,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    variant: { control: { type: 'radio' }, options: ['underline', 'outline'] },
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
} satisfies Record<string, unknown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: testDefaultInput,
};

export const WithIcons: Story = {
  args: { withIcons: true } as Record<string, unknown>,
  play: testWithIconsInput,
};

export const Responsive: Story = {
  globals: { viewport: { value: 'mobile', isRotated: false } },
  parameters: { layout: 'padded' },
  args: { label: 'Nome', variant: 'outline' },
};
