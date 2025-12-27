/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";

import { DrawerHeader } from "../DrawerHeader";
import type { DrawerHeaderProps } from "../drawer-header.types";
import { Drawer } from "../../Drawer/Drawer";
import { useToggle } from "../../../hooks";

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
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    children: <h2 className="text-center">Children do Drawer Header</h2>,
  },
};

export default meta;
type Story = StoryObj<DrawerHeaderProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: (args) => {
    const { istoggle, handleClose, handleOpen } = useToggle();

    return (
      <>
        <button
          onClick={handleOpen}
          className="p-2 bg-blue-400 rounded text-white cursor-pointer"
        >
          Abrir Modal Header
        </button>
        <Drawer isOpen={istoggle} onClose={handleClose}>
          <DrawerHeader {...args} />
        </Drawer>
      </>
    );
  },
};
