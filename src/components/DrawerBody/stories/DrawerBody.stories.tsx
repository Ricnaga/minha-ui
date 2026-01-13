/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";

import { DrawerBody } from "../DrawerBody";
import type { DrawerBodyProps } from "../drawer-body.types";
import { useToggle } from "@/hooks";
import { Drawer } from "../../Drawer/Drawer";
import { testDefaultDrawerBody } from "./DrawerBody.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<DrawerBodyProps> = {
  title: "Components/Interação/Drawer/DrawerBody",
  component: DrawerBody,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: false }, // evita mostrar JSON nos controls
    padding: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Tamanho do padding interno do DrawerBody",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
    },
    scroll: {
      control: { type: "select" },
      options: ["auto", "hidden", "smooth"],
      description: "Comportamento de rolagem do conteúdo",
      table: {
        type: { summary: "auto | hidden | smooth" },
        defaultValue: { summary: "auto" },
      },
    },
    background: {
      control: { type: "select" },
      options: ["default", "gray", "dark"],
      description: "Cor de fundo do DrawerBody",
      table: {
        type: { summary: "default | gray | dark" },
        defaultValue: { summary: "default" },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    children: <h2 className="text-center">Children do Drawer Body</h2>,
    padding: "md",
    scroll: "auto",
    background: "default",
  },
};

export default meta;
type Story = StoryObj<DrawerBodyProps>;

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
          Abrir Drawer Body
        </button>
        <Drawer isOpen={isToggle} onClose={handleClose}>
          <DrawerBody {...args} />
        </Drawer>
      </>
    );
  },
  play: testDefaultDrawerBody,
};
