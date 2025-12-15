import type { Meta, StoryObj } from "@storybook/react-vite";

import { Select } from "../Select";
import type { SelectProps } from "../select.types";

type MetaProps = Meta<SelectProps>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: MetaProps = {
  title: "Components/Select",
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<MetaProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    options: [
      { key: "Python", value: "Python" },
      { key: "Javascript", value: "Javascript" },
      { key: "Ruby", value: "Ruby" },
    ],
  },
};
