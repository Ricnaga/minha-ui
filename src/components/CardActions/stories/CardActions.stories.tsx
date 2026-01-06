import type { Meta, StoryObj } from "@storybook/react-vite";

import { CardActions } from "../CardActions";
import type { CardActionsProps } from "../card-actions.types";
import { Card } from "src/components/Card/Card";
import { testDefaultCardActions } from "./CardActions.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<CardActionsProps> = {
  title: "Components/Card/CardActions",
  component: CardActions,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { children: "Conteúdo do Card Actions" },
  argTypes: {
    align: {
      description:
        "Define o alinhamento horizontal das ações dentro do container.",
      control: { type: "select" },
      options: ["start", "center", "end", "between"],
      table: {
        type: { summary: `"start" | "center" | "end" | "between"` },
        defaultValue: { summary: "end" },
        category: "Layout",
      },
    },

    direction: {
      description: "Define a direção do fluxo de ações (linha ou coluna).",
      control: { type: "select" },
      options: ["row", "column"],
      table: {
        type: { summary: `"row" | "column"` },
        defaultValue: { summary: "row" },
        category: "Layout",
      },
    },

    wrap: {
      description:
        "Define se as ações podem quebrar a linha (wrap) quando não cabem.",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: undefined },
        category: "Layout",
      },
    },

    divider: {
      description:
        "Adiciona uma borda superior ao container de ações, separando do conteúdo do Card.",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: undefined },
        category: "Style",
      },
    },
  },
  decorators: (Story) => (
    <Card>
      <Story />
    </Card>
  ),
};

export default meta;
type Story = StoryObj<CardActionsProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  play: testDefaultCardActions,
};
