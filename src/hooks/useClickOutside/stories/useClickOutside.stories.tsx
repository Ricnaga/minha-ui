/* eslint-disable react-hooks/rules-of-hooks */

import { useToggle } from "@/hooks";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { useClickOutside } from "..";

const meta: Meta = {
  title: "Hooks/useClickOutside",
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const { isToggle, handleClose, handleOpen } = useToggle();
    const [log, setLog] = useState<string>("Nenhum clique fora ainda");

    const ref = useClickOutside<HTMLDivElement>({
      enabled: isToggle,
      onOutsideClick: () => {
        setLog("➡️ Clique fora detectado");
        handleClose();
      },
    });

    return (
      <div className="p-10">
        <p>
          Clique <strong>dentro</strong> da caixa não faz nada. Clique{" "}
          <strong>fora</strong> fecha a caixa.
        </p>

        <button
          className="text-white rounded p-1 cursor-pointer bg-blue-500"
          onClick={() => {
            handleOpen();
            setLog("Caixa aberta novamente");
          }}
        >
          Abrir caixa
        </button>

        <div className="mt-6">
          {isToggle && (
            <div
              ref={ref}
              className="p-5 border-2 border-neutral-500 w-64 bg-amber-400"
            >
              Clique dentro de mim
            </div>
          )}
        </div>

        <p className="mt-7">
          <strong>Status:</strong> {log}
        </p>
      </div>
    );
  },
};
