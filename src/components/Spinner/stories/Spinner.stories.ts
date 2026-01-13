import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner, type SpinnerProps } from "../..";
import { testDefaultSpinner } from "./Spinner.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<SpinnerProps> = {
  title: "Components/Feedback/Spinner",
  component: Spinner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "info", "warning", "error"],
      description: "Cor do spinner (semântico)",
      defaultValue: "primary",
      table: {
        type: {
          summary:
            '"primary" | "secondary" | "success" | "info" | "warning" | "error"',
        },
        defaultValue: { summary: "primary" },
      },
    },
    thickness: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Espessura do traço do spinner",
      defaultValue: "md",
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: "md" },
      },
    },
    className: {
      control: "text",
      description: "Classe Tailwind para controlar layout (w/h) do spinner",
      table: {
        type: { summary: "string" },
      },
    },
  },
  args: {
    className: "size-24",
    color: "primary",
    thickness: "md",
  },
};

export default meta;
type Story = StoryObj<SpinnerProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  play: testDefaultSpinner,
};
