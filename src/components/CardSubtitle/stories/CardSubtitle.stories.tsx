import type { Meta, StoryObj } from "@storybook/react-vite";

import { CardSubtitle } from "../CardSubtitle";
import type { CardSubtitleProps } from "../card-subtitle.types";
import { Card } from "src/components/Card/Card";
import { CardHeader } from "src/components/CardHeader";
import { CardTitle } from "src/components/CardTitle";
import { testDefaultCardSubtitle } from "./CardSubtitle.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<CardSubtitleProps> = {
  title: "Components/Card/CardSubtitle",
  component: CardSubtitle,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { children: "Conteúdo do Card Sub title" },
  decorators: (Story) => (
    <Card>
      <CardHeader>
        <CardTitle>Conteúdo do Card title</CardTitle>
        <Story />
      </CardHeader>
    </Card>
  ),
};

export default meta;
type Story = StoryObj<CardSubtitleProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  play: testDefaultCardSubtitle,
};
