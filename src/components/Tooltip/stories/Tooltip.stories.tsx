import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tooltip } from "../Tooltip";
import { ShoppingCartIcon } from "@phosphor-icons/react";
import type { TooltipProps } from "../tooltip.types";
import { testDefaultTooltip } from "./Tooltip.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<TooltipProps> = {
  title: "Components/Interação/Tooltip",
  component: Tooltip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    content: {
      description: "O conteúdo que será exibido dentro do tooltip",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    color: {
      description: "Cor do tooltip, seguindo o design system",
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "error",
        "warning",
        "info",
        "black",
        "white",
      ],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "black" },
      },
    },
    position: {
      description: "Posição do tooltip em relação ao elemento trigger",
      control: "select",
      options: ["top", "bottom", "left", "right"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "top" },
      },
    },
    className: {
      description: "Classes adicionais para customização do tooltip",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    children: {
      description: "Elemento que dispara o tooltip (trigger)",
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  args: {
    color: "black",
    position: "top",
    content: "content",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<TooltipProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <button className="p-2 bg-gray-200 rounded-full">
        <ShoppingCartIcon />
      </button>
    </Tooltip>
  ),
  play: testDefaultTooltip,
};
