import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "src/components/Card/Card";
import { CardImage } from "../CardImage";
import type { CardImageProps } from "../card-image.types";
import { CardBody } from "src/components/CardBody";
import { testDefaultCardImage } from "./CardImage.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<CardImageProps> = {
  title: "Components/Card/CardImage",
  component: CardImage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    className: "w-64",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    alt: "Imagem ilustrativa do card",
  },
  argTypes: {
    src: {
      description: "URL da imagem exibida no Card.",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        category: "Content",
      },
    },

    alt: {
      description:
        "Texto alternativo para acessibilidade. Obrigatório para imagens informativas.",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        category: "Accessibility",
      },
    },

    rounded: {
      description: "Define o arredondamento da imagem.",
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl", "full"],
      table: {
        type: {
          summary: `"none" | "sm" | "md" | "lg" | "xl" | "full"`,
        },
        defaultValue: { summary: "none" },
        category: "Style",
      },
    },

    aspect: {
      description:
        "Controla a proporção da imagem. Útil para manter consistência visual em Cards.",
      control: { type: "select" },
      options: ["auto", "square", "video", "portrait"],
      table: {
        type: {
          summary: `"auto" | "square" | "video" | "portrait"`,
        },
        defaultValue: { summary: "auto" },
        category: "Style",
      },
    },
  },
  decorators: (Story) => (
    <Card>
      <CardBody>
        <Story />
      </CardBody>
    </Card>
  ),
};

export default meta;
type Story = StoryObj<CardImageProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  play: testDefaultCardImage,
};
