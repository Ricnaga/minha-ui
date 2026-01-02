/* eslint-disable react-hooks/rules-of-hooks */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { useDebounce } from "../";

const meta: Meta = {
  title: "Hooks/useDebounce",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const [value, setValue] = useState("");
    const debouncedValue = useDebounce(value, 800);

    return (
      <div className="p-10 w-[400px] flex flex-col gap-4">
        <p className="text-sm text-neutral-700">
          Digite no input. O valor <strong>debounced</strong> só atualiza após
          800ms sem digitação.
        </p>

        <input
          className="border p-2 rounded"
          placeholder="Digite algo..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <div className="mt-4 flex flex-col gap-2 text-sm">
          <p>
            <strong>Valor atual:</strong>{" "}
            <span className="text-blue-600">{value || "—"}</span>
          </p>

          <p>
            <strong>Valor debounced:</strong>{" "}
            <span className="text-green-600">{debouncedValue || "—"}</span>
          </p>
        </div>
      </div>
    );
  },
};
