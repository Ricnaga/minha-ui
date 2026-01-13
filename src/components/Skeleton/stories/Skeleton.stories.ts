import type { Meta, StoryObj } from "@storybook/react-vite";

import { Skeleton } from "../Skeleton";
import type { SkeletonProps } from "../skeleton.types";
import { testDefaultSkeleton } from "./Skeleton.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<SkeletonProps> = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    shape: "rounded",
  },
};

export default meta;
type Story = StoryObj<SkeletonProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  play: testDefaultSkeleton,
};
