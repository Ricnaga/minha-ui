import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "src/components/Card/Card";
import { CardBody } from "src/components/CardBody";
import { CardHeader } from "src/components/CardHeader";
import type { CardDescriptionProps } from "../card-description.types";
import { CardDescription } from "../CardDescription";
import { testDefaultCardDescription } from "./CardDescription.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<CardDescriptionProps> = {
  title: "Components/Card/CardDescription",
  component: CardDescription,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { children: "Conteúdo do Card Description" },
  decorators: (Story) => (
    <Card>
      <CardHeader>Conteúdo do Card Header</CardHeader>
      <CardBody>
        <Story />
      </CardBody>
    </Card>
  ),
};

export default meta;
type Story = StoryObj<CardDescriptionProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  play: testDefaultCardDescription,
};
