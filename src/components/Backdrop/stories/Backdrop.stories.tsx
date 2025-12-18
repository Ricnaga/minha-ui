/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Backdrop } from "../Backdrop";
import type { BackdropProps } from "../backdrop.types";
import { useEffect, useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<BackdropProps> = {
  title: "Components/Backdrop",
  component: Backdrop,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<BackdropProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: (args) => {
    const [isOpen, setAsOpen] = useState<boolean>(false);

    useEffect(() => {
      setTimeout(() => {
        setAsOpen(false);
      }, 3000);
    }, [isOpen]);

    return (
      <div className="text-center">
        <button
          onClick={() => setAsOpen(true)}
          className="cursor-pointer bg-blue-400 rounded p-2 text-white"
        >
          Ativar backdrop
        </button>
        <p>Após 3 segundos o backdrop retorna ao estado inicial</p>
        <Backdrop {...args} isOpen={isOpen} />
      </div>
    );
  },
};
