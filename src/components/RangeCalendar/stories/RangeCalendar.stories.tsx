/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import type { DateRange, RangeCalendarProps } from "../range-calendar.types";
import { RangeCalendar } from "../RangeCalendar";
import { testDefaultRangeCalendar } from "./RangeCalendar.play";

const meta: Meta<RangeCalendarProps> = {
  title: "Components/RangeCalendar",
  component: RangeCalendar,
  parameters: {
    layout: "centered",
  },
  args: {
    locale: "pt-BR",
  },
};

export default meta;

type Story = StoryObj<RangeCalendarProps>;

export const Default: Story = {
  render: (args) => {
    const [range, setRange] = useState<DateRange>({
      from: new Date(),
      to: null,
    });

    return <RangeCalendar {...args} value={range} onDateChange={setRange} />;
  },
  play: testDefaultRangeCalendar,
};
