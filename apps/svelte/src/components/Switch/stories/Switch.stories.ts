import type { StoryObj } from '@storybook/svelte-vite';

import { testDefaultSwitch, testKeyboardSwitch } from './Switch.play';
import SwitchStory from './SwitchStory.svelte';

const meta = {
  title: 'Components/Formularios/Switch',
  component: SwitchStory,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'radio' }, options: ['small', 'medium'] },
    color: { control: { type: 'select' }, options: ['primary', 'secondary', 'success', 'info', 'warning', 'error'] },
    label: { control: 'text' },
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { size: 'medium', color: 'primary', disabled: false },
} satisfies Record<string, unknown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'Receber notificações' },
  play: testDefaultSwitch,
};

export const WithLabel: Story = {
  args: { label: 'Receber notificações' },
  play: testKeyboardSwitch,
};

export const Small: Story = {
  args: { size: 'small', label: 'Ativo' },
};

export const Disabled: Story = {
  args: { disabled: true, defaultChecked: true, label: 'Ativo' },
};

export const Colors: Story = {
  args: { colors: true },
};
