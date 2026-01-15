/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useLocalStorage } from "../";
import { testDefaultLocalStorage } from "./useLocalStorage.play";

const meta: Meta = {
  title: "Hooks/useLocalStorage",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const { value, create, update, remove, clear } = useLocalStorage<string>(
      "storybook-example",
      "initial value"
    );

    return (
      <div className="w-80 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
        <h3 className="mb-2 text-lg font-semibold text-zinc-900">
          useLocalStorage
        </h3>

        <p className="mb-4 text-sm text-zinc-600">
          <span className="font-medium text-zinc-800">Value:</span>{" "}
          {value ?? <em className="text-zinc-400">null</em>}
        </p>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => create("created value")}
            className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700"
          >
            Create
          </button>

          <button
            onClick={() => update("updated value")}
            className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Update
          </button>

          <button
            onClick={remove}
            className="rounded-md bg-amber-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-amber-600"
          >
            Remove
          </button>

          <button
            onClick={clear}
            className="rounded-md bg-rose-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-rose-700"
          >
            Clear
          </button>
        </div>
      </div>
    );
  },
  play: testDefaultLocalStorage,
};
