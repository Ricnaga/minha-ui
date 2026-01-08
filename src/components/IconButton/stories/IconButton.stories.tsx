import type { Meta, StoryObj } from "@storybook/react-vite";
import { InfoIcon } from "@phosphor-icons/react";

import { IconButton } from "../IconButton";
import type { IconButtonProps } from "../icon-button.types";
import { testDefaultIconButton } from "./IconButton.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<IconButtonProps> = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Ícone exibido dentro do botão.",
      control: false,
    },

    variant: {
      description: "Estilo visual do botão.",
      control: { type: "select" },
      options: ["contained", "outline", "ghost"],
    },

    color: {
      description: "Cor semântica do botão.",
      control: { type: "select" },
      options: ["primary", "secondary", "success", "info", "warning", "error"],
    },

    size: {
      description: "Tamanho do IconButton.",
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },

    radius: {
      description: "Formato do botão.",
      control: { type: "select" },
      options: ["full"],
    },

    isLoading: {
      description: "Exibe estado de carregamento e desativa o botão.",
      control: "boolean",
    },

    disabled: {
      description: "Desativa o botão.",
      control: "boolean",
    },

    onClick: {
      action: "clicked",
      description: "Disparado ao clicar no botão.",
    },
  },

  args: {
    children: <InfoIcon className="size-6" />,
    size: "medium",
    radius: "full",
    variant: "contained",
    color: "primary",
    isLoading: false,
  },
};

export default meta;
type Story = StoryObj<IconButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  play: testDefaultIconButton,
};
