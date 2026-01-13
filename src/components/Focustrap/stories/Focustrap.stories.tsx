/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";

import { useToggle } from "@/hooks";
import { Focustrap } from "../Focustrap";
import type { FocustrapProps } from "../focustrap.types";
import { testDefaultFocustrap, testToggleFocusTrap } from "./Focustrap.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<FocustrapProps> = {
  title: "Components/Interação/Focustrap",
  component: Focustrap,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    isFocus: true, // por padrão o trap está ativo
  },
};

export default meta;
type Story = StoryObj<FocustrapProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <Focustrap {...args}>
      <div className="flex flex-col gap-4 p-6 border rounded-lg w-80 bg-gray-50">
        <input data-testid="first" type="text" placeholder="Nome" />
        <button
          className="bg-blue-500 text-white p-2 rounded cursor-pointer focus:bg-blue-800"
          data-testid="middle"
        >
          Salvar
        </button>
        <input data-testid="last" type="text" placeholder="Email" />
      </div>
    </Focustrap>
  ),
  play: testDefaultFocustrap,
};

export const ToggleFocusTrap: Story = {
  render: () => {
    const { isToggle, handleToggle } = useToggle();

    return (
      <div className="flex flex-col items-center gap-4">
        <button
          className="bg-green-500 text-white py-2 px-4 rounded"
          onClick={handleToggle}
        >
          {isToggle ? "Desativar FocusTrap" : "Ativar FocusTrap"}
        </button>

        <Focustrap isFocus={isToggle}>
          <div className="flex flex-col gap-4 p-6 border rounded-lg w-80 bg-gray-50">
            <input
              type="text"
              placeholder="Nome"
              className="border p-2 rounded"
            />
          </div>
        </Focustrap>
      </div>
    );
  },
  play: testToggleFocusTrap,
};
