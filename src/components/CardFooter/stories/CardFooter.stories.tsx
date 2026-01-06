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
