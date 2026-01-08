import type { Meta, StoryObj } from "@storybook/react-vite";
import { InfoIcon } from "@phosphor-icons/react";
import { Input } from "../Input";
import { testDefaultInput, testWithIconsInput } from "./Input.play";
import type { InputProps } from "../input.types";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<InputProps> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: {
      description: "Texto do label do input",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    variant: {
      control: { type: "radio" }, // radio garante mostrar todas as opções
      options: ["underline", "outline"],
      description: "Tipo visual do input",
      table: {
        type: { summary: "underline | outline" },
        defaultValue: { summary: "outline" },
      },
    },
    startIcon: {
      description: "Ícone no início do input (ReactNode)",
      control: false, // JSX não é editável via control
      table: { type: { summary: "ReactNode" } },
    },
    endIcon: {
      description: "Ícone no final do input (ReactNode)",
      control: false,
      table: { type: { summary: "ReactNode" } },
    },
    type: {
      description: "Tipo do input (text, password, email, etc.)",
      control: {
        type: "select",
        options: ["text", "password", "email", "number", "tel", "url"],
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "text" },
      },
    },
    disabled: {
      description: "Desabilita o input",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: undefined },
      },
    },
    required: {
      description: "Marca o input como obrigatório",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: undefined },
      },
    },
    value: {
      description: "Valor controlado do input",
      control: "text",
      table: { type: { summary: "string" } },
    },
    onChange: {
      description: "Callback quando o valor do input muda",
      action: "changed",
      table: {
        type: { summary: "(e: React.ChangeEvent<HTMLInputElement>) => void" },
      },
    },
  },
  args: {
    label: "Nome",
    variant: "outline",
    type: "text",
    disabled: false,
    required: false,
    startIcon: undefined,
    endIcon: undefined,
  },
};

export default meta;
type Story = StoryObj<InputProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  play: testDefaultInput,
};

export const WithIcons: Story = {
  args: {
    startIcon: <InfoIcon />,
    endIcon: <InfoIcon />,
  },
  play: testWithIconsInput,
};
