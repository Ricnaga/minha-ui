import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from '../Switch';
import type { SwitchProps } from '../switch.types';
import { testDefaultSwitch, testKeyboardSwitch } from './Switch.play';

const meta: Meta<SwitchProps> = {
  title: 'Components/Formularios/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Tamanho do switch',
      control: { type: 'radio' },
      options: ['small', 'medium'],
      table: {
        type: { summary: 'small | medium' },
        defaultValue: { summary: 'medium' },
      },
    },
    color: {
      description: 'Cor do track quando ligado',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'error'],
      table: {
        type: {
          summary: 'primary | secondary | success | info | warning | error',
        },
        defaultValue: { summary: 'primary' },
      },
    },
    label: {
      description: 'Texto associado ao switch',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    checked: {
      description: 'Estado controlado',
      control: 'boolean',
      table: { type: { summary: 'boolean' } },
    },
    defaultChecked: {
      description: 'Estado inicial não-controlado',
      control: 'boolean',
      table: { type: { summary: 'boolean' } },
    },
    disabled: {
      description: 'Desabilita o switch',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onCheckedChange: {
      description: 'Disparado a cada troca, com o novo estado booleano',
      action: 'checked changed',
      table: { type: { summary: '(checked: boolean) => void' } },
    },
  },
  args: {
    size: 'medium',
    color: 'primary',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<SwitchProps>;

export const Default: Story = {
  args: {
    label: 'Receber notificações',
  },
  play: testDefaultSwitch,
};

export const WithLabel: Story = {
  args: {
    label: 'Receber notificações',
  },
  play: testKeyboardSwitch,
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Ativo',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
    label: 'Ativo',
  },
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {(
        ['primary', 'secondary', 'success', 'info', 'warning', 'error'] as const
      ).map((color) => (
        <Switch
          key={color}
          {...args}
          color={color}
          defaultChecked
          label={color}
        />
      ))}
    </div>
  ),
};
