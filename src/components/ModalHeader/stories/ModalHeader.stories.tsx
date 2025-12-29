/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalHeader } from "../ModalHeader";
import type { ModalHeaderProps } from "../modal-header.types";
import { useToggle } from "@/hooks";
import { Modal } from "../../Modal/Modal";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<ModalHeaderProps> = {
  title: "Components/Modal/ModalHeader",
  component: ModalHeader,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    children: { control: false }, // evita mostrar JSON nos controls
  },
  args: {
    children: <h2 className="text-center">Children do Modal Header</h2>,
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<ModalHeaderProps>;

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
        <Modal isOpen={istoggle} onClose={handleClose}>
          <ModalHeader {...args} />
        </Modal>
      </>
    );
  },
};
