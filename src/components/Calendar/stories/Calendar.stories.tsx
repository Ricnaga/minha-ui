/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import type { CalendarProps } from "../calendar.types";
import { Calendar } from "../Calendar";

const meta: Meta<CalendarProps> = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {
    locale: "pt-BR",
  },
};

export default meta;
type Story = StoryObj<CalendarProps>;

export const Default: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | null>(new Date());

    return <Calendar {...args} value={date} onDateChange={setDate} />;
  },
};
