import type { Meta, StoryObj } from "@storybook/react-vite";

import { Select } from "../Select";
import type { SelectProps } from "../select.types";
import { fn } from "storybook/test";
import { testDefaultMultiple, testDefaultSelect } from "./Select.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<SelectProps> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    isMultiple: false,
    isRenderChips: false,
    defaultValue: [
      { key: "Option 1", value: "option1 - valor do input sendo mostrado" },
    ],
    options: [
      { key: "Option 1", value: "option1 - valor do input sendo mostrado" },
      { key: "Option 2", value: "option2 - valor do input sendo mostrado" },
      { key: "Option 3", value: "option3 - valor do input sendo mostrado" },
    ],
    onSelectChange: fn(),
  },
};

export default meta;
type Story = StoryObj<SelectProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  play: testDefaultSelect,
};

export const Multiple: Story = {
  args: {
    isMultiple: true,
  },
  play: testDefaultMultiple,
};
