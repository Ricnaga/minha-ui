import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "src/components/Card/Card";
import { CardHeader } from "src/components/CardHeader";
import { CardBody } from "../CardBody";
import type { CardBodyProps } from "../card-body.types";
import { testDefaultCardBody } from "./CardBody.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<CardBodyProps> = {
  title: "Components/Card/CardBody",
  component: CardBody,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { children: "Conteúdo do Card Body" },
  argTypes: {
    padding: {
      description: "Define o padding interno do Card Body.",
      control: { type: "select" },
      options: ["none", "sm", "md", "lg"],
      table: {
        type: { summary: `"none" | "sm" | "md" | "lg"` },
        defaultValue: { summary: "md" },
        category: "Layout",
      },
    },
    gap: {
      description: "Define o espaçamento entre elementos filhos.",
      control: { type: "select" },
      options: ["none", "sm", "md", "lg"],
      table: {
        type: { summary: `"none" | "sm" | "md" | "lg"` },
        defaultValue: { summary: "md" },
        category: "Layout",
      },
    },
    background: {
      description: "Define o background do Card Body.",
      control: { type: "select" },
      options: ["none", "light", "default"],
      table: {
        type: { summary: `"none" | "light" | "default"` },
        defaultValue: { summary: "none" },
        category: "Style",
      },
    },
  },
  decorators: (Story) => (
    <Card>
      <CardHeader>Conteúdo do Card Header</CardHeader>
      <Story />
    </Card>
  ),
};

export default meta;
type Story = StoryObj<CardBodyProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  play: testDefaultCardBody,
};
