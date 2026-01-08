/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";

import { ModalFooter } from "../ModalFooter";
import type { ModalFooterProps } from "../modal-footer.types";
import { Modal } from "../../Modal/Modal";
import { useToggle } from "@/hooks";
import { testDefaultModalFooter } from "./ModalFooter.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<ModalFooterProps> = {
  title: "Components/Modal/ModalFooter",
  component: ModalFooter,
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
      options: ["sm", "md", "lg", "xl"],
      description: "Padding interno do footer",
      table: {
        type: { summary: "sm | md | lg | xl" },
        defaultValue: { summary: "md" },
      },
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "Alinhamento horizontal dos elementos do footer",
      table: {
        type: { summary: "left | center | right" },
        defaultValue: { summary: "right" },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    children: <h2 className="text-center">Children do Modal Footer</h2>,
    padding: "md",
    align: "right",
  },
};

export default meta;
type Story = StoryObj<ModalFooterProps>;

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
          Abrir Modal Footer
        </button>
        <Modal isOpen={isToggle} onClose={handleClose}>
          <ModalFooter {...args} />
        </Modal>
      </>
    );
  },
  play: testDefaultModalFooter,
};
