/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";

import { useToggle } from "@/hooks";
import { Modal } from "../Modal";
import type { ModalProps } from "../modal.types";

import { testCompleteModal, testDefaultModal } from "./Modal.play";
import { ModalHeader } from "../../ModalHeader";
import { ModalContent } from "../../ModalContent";
import { ModalFooter } from "../../ModalFooter";
import { ModalActions } from "../../ModalActions";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<ModalProps> = {
  title: "Components/Interação/Modal",
  component: Modal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: false }, // evita mostrar JSON nos controls
    shadow: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      description: "Sombra do modal",
      table: {
        type: { summary: "sm | md | lg | xl" },
        defaultValue: { summary: "md" },
      },
    },
    radius: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl", "2xl", "3xl"],
      description: "Raio das bordas do modal",
      table: {
        type: { summary: "sm | md | lg | xl | 2xl | 3xl" },
        defaultValue: { summary: "md" },
      },
    },
    padding: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl"],
      description: "Sombra do modal",
      table: {
        type: { summary: "none | sm | md | lg | xl" },
        defaultValue: { summary: "md" },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    children: <h2 className="text-center">Children do Modal</h2>,
    radius: "md",
    shadow: "md",
    padding: "md",
  },
};

export default meta;
type Story = StoryObj<ModalProps>;

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
          Abrir Modal
        </button>
        <Modal {...args} isOpen={isToggle} onClose={handleClose} />
      </>
    );
  },
  play: testDefaultModal,
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
          Abrir Modal
        </button>
        <Modal {...args} isOpen={isToggle} onClose={handleClose}>
          <ModalHeader>Modal Header</ModalHeader>
          <ModalContent>Modal Body</ModalContent>
          <ModalFooter>
            <ModalActions />
          </ModalFooter>
        </Modal>
      </>
    );
  },
  play: testCompleteModal,
};
