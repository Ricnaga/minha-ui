import type { Meta, StoryObj } from "@storybook/react-vite";

import { CardHeader } from "../CardHeader";
import type { CardHeaderProps } from "../card-header.types";
import { Card } from "src/components/Card/Card";
import { testDefaultCardHeader } from "./CardHeader.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<CardHeaderProps> = {
  title: "Components/Card/CardHeader",
  component: CardHeader,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { children: "Conteúdo do Card Header" },
  decorators: (Story) => (
    <Card>
      <Story />
    </Card>
  ),
};

export default meta;
type Story = StoryObj<CardHeaderProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  play: testDefaultCardHeader,
};
