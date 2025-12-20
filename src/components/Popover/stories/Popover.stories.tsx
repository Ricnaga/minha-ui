/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";
import { PopoverContent } from "../../PopoverContent";
import { PopoverTrigger } from "../../PopoverTrigger";
import { Popover } from "../Popover";
import type { PopoverProps } from "../popover.types";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<PopoverProps> = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<PopoverProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: (args) => {
    const [isOpen, setAsOpen] = useState<boolean>(false);

    return (
      <Popover
        {...args}
        onPopoverChange={() => setAsOpen(true)}
        isOpen={isOpen}
      >
        <PopoverTrigger>
          <button className="bg-blue-400 p-2 rounded text-white">Abrir </button>
        </PopoverTrigger>
        <PopoverContent>
          <button
            onClick={() => setAsOpen(false)}
            className="bg-red-400 p-2 rounded text-white"
          >
            Fechar Popover
          </button>
        </PopoverContent>
      </Popover>
    );
  },
};
