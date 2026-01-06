import type { Meta, StoryObj } from "@storybook/react-vite";

import { CardFooter } from "../CardFooter";
import type { CardFooterProps } from "../card-footer.types";
import { Card } from "src/components/Card/Card";
import { CardActions } from "src/components/CardActions";
import { testDefaultCardFooter } from "./CardFooter.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<CardFooterProps> = {
  title: "Components/Card/CardFooter",
  component: CardFooter,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { children: "Conteúdo do Card Footer" },
  argTypes: {
    align: {
      description:
        "Define o alinhamento horizontal dos elementos dentro do CardFooter.",
      control: { type: "select" },
      options: ["start", "center", "end", "between"],
      table: {
        type: { summary: `"start" | "center" | "end" | "between"` },
        defaultValue: { summary: "end" },
        category: "Layout",
      },
    },

    wrap: {
      description:
        "Define se os elementos dentro do footer podem quebrar a linha (wrap).",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: undefined },
        category: "Layout",
      },
    },

    divider: {
      description:
        "Adiciona uma borda superior separando o footer do conteúdo acima.",
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
      <CardActions>
        <Story />
      </CardActions>
    </Card>
  ),
};

export default meta;
type Story = StoryObj<CardFooterProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  play: testDefaultCardFooter,
};
