import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "../Checkbox";
import { testDefaultCheckbox } from "./Checkbox.play";
import type { CheckboxProps } from "../checkbox.types";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<CheckboxProps> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["glow"], // colocar aqui todas as variants do tv
      description: "Escolha a variant do checkbox",
      table: {
        type: { summary: "variant" },
        defaultValue: { summary: "glow" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Desabilita o checkbox",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: undefined },
      },
    },
    indeterminate: {
      control: { type: "boolean" },
      description: "Define o checkbox como indeterminado",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: undefined },
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<CheckboxProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  play: testDefaultCheckbox,
};
