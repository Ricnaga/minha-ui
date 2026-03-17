import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";
import { Stepper } from "../Stepper";
import { StepperProvider } from "../../StepperProvider";
import type { StepperProps } from "../stepper.types";

const meta: Meta<StepperProps> = {
  title: "Components/Indicadores/Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    isClickable: {
      control: "boolean",
    },
  },
  args: { onStepChange: fn() },
};

export default meta;
type Story = StoryObj<StepperProps>;

const steps = [
  { id: "1", title: "Step 1", description: "Description 1" },
  { id: "2", title: "Step 2", description: "Description 2" },
  { id: "3", title: "Step 3", description: "Description 3" },
];

const StepperWithProvider = (args: StepperProps) => (
  <StepperProvider
    steps={steps}
    orientation={args.orientation}
    isClickable={args.isClickable}
    onStepChange={args.onStepChange}
  >
    <Stepper />
  </StepperProvider>
);

export const Horizontal: Story = {
  render: (args) => <StepperWithProvider {...args} />,
};

export const Vertical: Story = {
  render: (args) => (
    <StepperProvider
      steps={steps}
      orientation="vertical"
      isClickable={args.isClickable}
      onStepChange={args.onStepChange}
    >
      <Stepper />
    </StepperProvider>
  ),
};

export const WithActiveStep: Story = {
  render: (args) => (
    <StepperProvider
      steps={steps}
      orientation="horizontal"
      activeStep={1}
      isClickable={args.isClickable}
      onStepChange={args.onStepChange}
    >
      <Stepper />
    </StepperProvider>
  ),
};

export const NotClickable: Story = {
  args: {
    isClickable: false,
  },
  render: (args) => (
    <StepperProvider
      steps={steps}
      orientation="horizontal"
      isClickable={false}
      onStepChange={args.onStepChange}
    >
      <Stepper />
    </StepperProvider>
  ),
};