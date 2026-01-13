/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";

import { useToggle } from "@/hooks";
import { Drawer } from "../../Drawer/Drawer";
import { DrawerFooter } from "../DrawerFooter";
import type { DrawerFooterProps } from "../drawer-footer.types";
import { testDefaultDrawerFooter } from "./DrawerFooter.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<DrawerFooterProps> = {
  title: "Components/Interação/Drawer/DrawerFooter",
  component: DrawerFooter,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: false }, // evita mostrar JSON nos controls
    align: {
      control: { type: "radio" },
      options: ["start", "center", "end"],
      description: "Alinhamento do conteúdo do Footer",
      defaultValue: "end",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "end" },
      },
    },
    padding: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      description: "Padding do Footer",
      defaultValue: "md",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
      },
    },
    border: {
      control: { type: "radio" },
      options: ["none", "thin", "thick"],
      description: "Espessura da borda superior do Footer",
      defaultValue: "thin",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "thin" },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    children: <h2 className="text-center">Children do Drawer Footer</h2>,
    align: "end",
    padding: "md",
    border: "none",
  },
};

export default meta;
type Story = StoryObj<DrawerFooterProps>;

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
          Abrir Drawer Footer
        </button>
        <Drawer isOpen={isToggle} onClose={handleClose}>
          <DrawerFooter {...args} />
        </Drawer>
      </>
    );
  },
  play: testDefaultDrawerFooter,
};
