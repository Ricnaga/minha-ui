/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";

import { ToastContainer } from "../ToastContainer";
import { Button } from "../../Button";
import { useToast } from "../useToastContainer";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta = {
  title: "Components/ToastContainer",
  component: ToastContainer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: (Story) => (
    <ToastContainer>
      <Story />
    </ToastContainer>
  ),
};

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: () => {
    const { showToast } = useToast();

    return (
      <Button
        onClick={() =>
          showToast({
            message: "Toasty",
          })
        }
      >
        Ativa toast
      </Button>
    );
  },
};
