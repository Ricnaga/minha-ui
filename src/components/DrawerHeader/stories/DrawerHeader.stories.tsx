/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";

import { DrawerHeader } from "../DrawerHeader";
import type { DrawerHeaderProps } from "../drawer-header.types";
import { Drawer } from "../../Drawer/Drawer";
import { useToggle } from "@/hooks";
import { testDefaultDrawerHeader } from "./DrawerHeader.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<DrawerHeaderProps> = {
  title: "Components/Drawer/DrawerHeader",
  component: DrawerHeader,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: false }, // evita mostrar JSON nos controls
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Tamanho do Drawer Header",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "Alinhamento do conteúdo do Drawer Header",
      table: {
        type: { summary: "left | center | right" },
        defaultValue: { summary: "center" },
      },
    },
    closeColor: {
      control: { type: "select" },
      options: ["default", "red", "gray"],
      description: "Cor do botão de fechar",
      table: {
        type: { summary: "default | red | gray" },
        defaultValue: { summary: "default" },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    children: <h2 className="text-center">Children do Drawer Header</h2>,
    size: "md",
    align: "center",
    closeColor: "default",
  },
};

export default meta;
type Story = StoryObj<DrawerHeaderProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: (args) => {
    const { isToggle, handleClose, handleOpen } = useToggle();

    return (
      <>
        <button
          onClick={handleOpen}
          className="p-2 bg-blue-400 rounded text-white cursor-pointer"
        >
          Abrir Drawer Header
        </button>
        <Drawer isOpen={isToggle} onClose={handleClose}>
          <DrawerHeader {...args} />
        </Drawer>
      </>
    );
  },
  play: testDefaultDrawerHeader,
};
