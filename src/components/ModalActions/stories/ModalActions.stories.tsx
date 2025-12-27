/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";

import { ModalActions } from "../ModalActions";
import type { ModalActionsProps } from "../modal-actions.types";
import { useToggle } from "../../../hooks";
import { Modal } from "../../Modal/Modal";
import { ModalFooter } from "../../ModalFooter";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<ModalActionsProps> = {
  title: "Components/Modal/ModalActions",
  component: ModalActions,
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
    children: <h2 className="text-center">Children do Modal Actions</h2>,
  },
};

export default meta;
type Story = StoryObj<ModalActionsProps>;

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
          Abrir Modal Actions
        </button>
        <Modal isOpen={istoggle} onClose={handleClose}>
          <ModalFooter>
            <ModalActions {...args} />
          </ModalFooter>
        </Modal>
      </>
    );
  },
};
