import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress, type ProgressProps } from "../..";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<ProgressProps> = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Altura do componente Progress",
      table: {
        category: "Variants",
        defaultValue: { summary: "md" },
      },
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "info", "warning", "error"],
      description: "Cor da barra de progresso",
      table: {
        category: "Variants",
        defaultValue: { summary: "primary" },
      },
    },
    animated: {
      control: { type: "boolean" },
      description: "Habilita/desabilita animação da barra",
      table: {
        category: "Variants",
        defaultValue: { summary: "false" },
      },
    },
    value: {
      control: { type: "number" },
      description: "Valor do progresso em porcentagem (0 a 100)",
      table: {
        category: "Props",
        defaultValue: { summary: "25" },
      },
    },
  },
  args: {
    size: "md",
    color: "primary",
    animated: true,
  },
};

export default meta;
type Story = StoryObj<ProgressProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return (
      <div className="w-40">
        <Progress {...args} />
      </div>
    );
  },
};
