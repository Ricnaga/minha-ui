/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";

import { useToggle } from "@/hooks";
import { Modal } from "../../Modal/Modal";
import { ModalContent } from "../ModalContent";
import type { ModalContentProps } from "../modal-content.types";
import { testDefaultModalContent } from "./ModalContent.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<ModalContentProps> = {
  title: "Components/Modal/ModalContent",
  component: ModalContent,
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
    children: <h2 className="text-center">Children do Modal Content</h2>,
  },
};

export default meta;
type Story = StoryObj<ModalContentProps>;

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
          Abrir Modal Content
        </button>
        <Modal isOpen={isToggle} onClose={handleClose}>
          <ModalContent {...args} />
        </Modal>
      </>
    );
  },
  play: testDefaultModalContent,
};
