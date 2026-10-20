import type { Meta, StoryObj } from '@storybook/react-vite';
import { OtpInput } from '../OtpInput';
import type { OtpInputProps } from '../otp-input.types';
import { testDefaultOtpInput, testPasteOtpInput } from './OtpInput.play';

const meta: Meta<OtpInputProps> = {
  title: 'Components/Formularios/OtpInput',
  component: OtpInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    length: {
      description: 'Quantidade de dígitos exibidos',
      control: { type: 'number', min: 1, max: 12 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '6' },
      },
    },
    value: {
      description: 'Valor controlado (tem precedência sobre defaultValue)',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    defaultValue: {
      description: 'Valor inicial no modo não-controlado',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    onOTPChange: {
      description: 'Disparado a cada alteração com a string completa',
      action: 'otp changed',
      table: { type: { summary: '(value: string) => void' } },
    },
    mask: {
      description: 'Oculta os dígitos (type=password)',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isInvalid: {
      description: 'Aplica o estado de erro',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Desabilita todos os campos',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    length: 6,
    mask: false,
    isInvalid: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<OtpInputProps>;

export const Default: Story = {
  play: testDefaultOtpInput,
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: '1234',
  },
};

export const WithPaste: Story = {
  play: testPasteOtpInput,
};

export const Masked: Story = {
  args: {
    mask: true,
  },
};

export const Invalid: Story = {
  args: {
    isInvalid: true,
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: '1234',
    disabled: true,
  },
};

export const LengthEight: Story = {
  args: {
    length: 8,
  },
};
