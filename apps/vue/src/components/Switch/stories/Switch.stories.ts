import type { Meta, StoryObj } from '@storybook/vue3-vite';

import Switch from '../Switch.vue';
import SwitchColorsStory from './SwitchColorsStory.vue';
import { testDefaultSwitch, testKeyboardSwitch } from './Switch.play';

const meta = {
  title: 'Components/Formularios/Switch',
  component: Switch,
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
} satisfies Meta<typeof Switch>;

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
  render: (args: Record<string, unknown>) => ({
    components: { SwitchColorsStory },
    setup() {
      return { args };
    },
    template: '<SwitchColorsStory v-bind="args" />',
  }),
};
