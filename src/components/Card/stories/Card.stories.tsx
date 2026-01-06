import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "../Card";
import type { CardProps } from "../card.types";
import { CardHeader } from "src/components/CardHeader";
import { CardBody } from "src/components/CardBody";
import { CardActions } from "src/components/CardActions";
import { CardTitle } from "src/components/CardTitle";
import { CardSubtitle } from "src/components/CardSubtitle";
import { CardDescription } from "src/components/CardDescription";
import { CardFooter } from "src/components/CardFooter";
import { CardImage } from "src/components/CardImage";
import { testCompositionCard, testDefaultCard } from "./Card.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<CardProps> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { children: "Conteúdo do Card" },
};

export default meta;
type Story = StoryObj<CardProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  play: testDefaultCard,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Composition: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Conteúdo do card title</CardTitle>
        <CardSubtitle>Conteúdo do card sub title</CardSubtitle>
      </CardHeader>
      <CardBody>
        <CardDescription>Conteúdo do card description</CardDescription>
        <div className="m-6">
          <CardImage
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            className="size-20"
          />
        </div>
      </CardBody>
      <CardActions>
        <CardFooter>Conteúdo do card footer</CardFooter>
      </CardActions>
    </Card>
  ),
  play: testCompositionCard,
};
