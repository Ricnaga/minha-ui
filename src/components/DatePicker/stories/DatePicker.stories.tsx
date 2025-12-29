/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";
import { DatePicker } from "../DatePicker";
import type { DatePickerProps } from "../date-picker.types";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<DatePickerProps> = {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {},
};

export default meta;
type Story = StoryObj<DatePickerProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: (args) => {
    const [dateValue, setDateValue] = useState<Date | null>(new Date());

    return (
      <DatePicker
        {...args}
        dateValue={dateValue}
        onDateChange={setDateValue}
      />
    );
  },
};
