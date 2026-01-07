import type { Meta, StoryObj } from "@storybook/react-vite";
import { formatToPercentage } from "..";

const meta: Meta = {
  title: "Utils/Number",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const FormatToPercentage: StoryObj = {
  render: () => (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg shadow-md space-y-2">
      <p className="text-gray-700">
        Valor original: <span className="font-mono">0.25</span>
      </p>
      <p className="text-green-600 font-bold text-lg">
        Formatado: {formatToPercentage({ value: 0.25 })}
      </p>
    </div>
  ),
};
