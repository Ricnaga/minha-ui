import type { Meta, StoryObj } from "@storybook/react-vite";

import { Divider } from "../Divider";
import { testDefaultDivider, testVerticalDivider } from "./Divider.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Estruturas/Divider",
  component: Divider,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    className: "w-full min-w-40",
  },
  play: testDefaultDivider,
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    className: "h-40",
  },
  play: testVerticalDivider,
};
