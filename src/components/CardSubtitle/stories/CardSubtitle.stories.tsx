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
  argTypes: {
    size: {
      description: "Define o tamanho do texto do subtítulo.",
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      table: {
        type: { summary: `"sm" | "md" | "lg"` },
        defaultValue: { summary: "md" },
        category: "Typography",
      },
    },

    weight: {
      description: "Define o peso da fonte do subtítulo.",
      control: { type: "select" },
      options: ["normal", "medium", "bold"],
      table: {
        type: { summary: `"normal" | "medium" | "bold"` },
        defaultValue: { summary: "normal" },
        category: "Typography",
      },
    },

    color: {
      description: "Define a cor do texto do subtítulo.",
      control: { type: "select" },
      options: ["default", "muted", "inverted"],
      table: {
        type: { summary: `"default" | "muted" | "inverted"` },
        defaultValue: { summary: "default" },
        category: "Typography",
      },
    },

    align: {
      description: "Define o alinhamento horizontal do subtítulo.",
      control: { type: "select" },
      options: ["left", "center", "right"],
      table: {
        type: { summary: `"left" | "center" | "right"` },
        defaultValue: { summary: "left" },
        category: "Typography",
      },
    },
  }, // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
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
