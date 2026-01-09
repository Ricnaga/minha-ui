import type { Meta, StoryObj } from "@storybook/react-vite";

import { Pagination } from "../Pagination";
import type { PaginationProps } from "../pagination.types";
import { fn } from "storybook/test";
import { testDefaultPagination } from "./Pagination.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<PaginationProps> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    totalPages: 15,
    onPageChange: fn(),
  },
};

export default meta;
type Story = StoryObj<PaginationProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  play: testDefaultPagination,
};
