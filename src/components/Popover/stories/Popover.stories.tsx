/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";

import { useDisclosure } from "@/hooks";
import { PopoverContent } from "../../PopoverContent";
import { PopoverTrigger } from "../../PopoverTrigger";
import { Popover } from "../Popover";
import type { PopoverProps } from "../popover.types";
import { testDefaultPopover } from "./Popover.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<PopoverProps> = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    side: {
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
      description: "Lado em que o popover será exibido",
      table: {
        category: "Variants",
        defaultValue: { summary: "bottom" },
      },
    },
    offset: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Offset do popover em relação ao trigger",
      table: {
        category: "Variants",
        defaultValue: { summary: "md" },
      },
    },
    width: {
      control: { type: "select" },
      options: ["auto", "trigger", "sm", "md", "lg"],
      description: "Largura do popover",
      table: {
        category: "Variants",
        defaultValue: { summary: "auto" },
      },
    },
    padding: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Padding interno do popover",
      table: {
        category: "Variants",
        defaultValue: { summary: "md" },
      },
    },
    shadow: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      description: "Sombra do popover",
      table: {
        category: "Variants",
        defaultValue: { summary: "md" },
      },
    },
    radius: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      description: "Border-radius do popover",
      table: {
        category: "Variants",
        defaultValue: { summary: "md" },
      },
    },
    animation: {
      control: { type: "select" },
      options: ["fade", "slide", "slideFade"],
      description: "Tipo de animação ao abrir/fechar",
      table: {
        category: "Variants",
        defaultValue: { summary: "slideFade" },
      },
    },
  },
  args: {
    side: "bottom",
    offset: "md",
    width: "auto",
    padding: "md",
    shadow: "md",
    radius: "md",
    animation: "slideFade",
  },
};

export default meta;
type Story = StoryObj<PopoverProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: (args) => {
    const { isOpen, handleOpen, handleClose } = useDisclosure();

    return (
      <Popover {...args} onPopoverChange={handleOpen} isOpen={isOpen}>
        <PopoverTrigger>
          <button className="bg-blue-400 p-2 rounded text-white cursor-pointer">
            Abrir Popover
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <button
            onClick={handleClose}
            className="bg-red-400 p-2 rounded text-white cursor-pointer"
          >
            Fechar Popover
          </button>
        </PopoverContent>
      </Popover>
    );
  },
  play: testDefaultPopover,
};
