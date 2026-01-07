/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";

import { useToggle } from "@/hooks";
import { Drawer } from "../Drawer";
import type { DrawerProps } from "../drawer.types";
import { DrawerHeader } from "src/components/DrawerHeader";
import { DrawerBody } from "src/components/DrawerBody";
import { DrawerFooter } from "src/components/DrawerFooter";
import { testCompleteDrawer, testDefaultDrawer } from "./Drawer.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<DrawerProps> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: false }, // evita mostrar JSON nos controls
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    children: <h2 className="text-center">Children do Drawer</h2>,
  },
};

export default meta;
type Story = StoryObj<DrawerProps>;

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
          Abrir Drawer
        </button>
        <Drawer {...args} isOpen={isToggle} onClose={handleClose} />
      </>
    );
  },
  play: testDefaultDrawer,
};

export const Complete: Story = {
  render: (args) => {
    const { isToggle, handleClose, handleOpen } = useToggle();

    return (
      <>
        <button
          onClick={handleOpen}
          className="p-2 bg-blue-400 rounded text-white cursor-pointer"
        >
          Abrir Drawer
        </button>
        <Drawer {...args} isOpen={isToggle} onClose={handleClose}>
          <DrawerHeader>Drawer Header</DrawerHeader>
          <DrawerBody>Drawer Body</DrawerBody>
          <DrawerFooter>Drawer Footer</DrawerFooter>
        </Drawer>
      </>
    );
  },
  play: testCompleteDrawer,
};
