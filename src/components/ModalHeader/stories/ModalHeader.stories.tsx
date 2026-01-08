/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalHeader } from "../ModalHeader";
import type { ModalHeaderProps } from "../modal-header.types";
import { useToggle } from "@/hooks";
import { Modal } from "../../Modal/Modal";
import { testDefaultModalHeader } from "./ModalHeader.play";

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
    padding: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      description: "Padding interno do wrapper do header (top e horizontal)",
      table: {
        type: { summary: "sm | md | lg | xl" },
        defaultValue: { summary: "lg" },
      },
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "Alinhamento horizontal do conteúdo do header",
      table: {
        type: { summary: "left | center | right" },
        defaultValue: { summary: "left" },
      },
    },
  },
  args: {
    children: <h2 className="text-center">Children do Modal Header</h2>,
    padding: "lg",
    align: "left",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<ModalHeaderProps>;

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
          Abrir Modal Header
        </button>
        <Modal isOpen={isToggle} onClose={handleClose}>
          <ModalHeader {...args} />
        </Modal>
      </>
    );
  },
  play: testDefaultModalHeader,
};
