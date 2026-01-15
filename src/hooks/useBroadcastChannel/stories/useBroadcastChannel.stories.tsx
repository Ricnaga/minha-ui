/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useBroadcastChannel } from "../";
import { useState } from "react";
import { testDefaultBroadcastChannel } from "./useBroadcastChannel.play";

const meta: Meta = {
  title: "Hooks/useBroadcastChannel",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const [messages, setMessages] = useState<string[]>([]);

    const { post } = useBroadcastChannel<string>(
      "storybook-broadcast-demo",
      (message) => {
        setMessages((prev) => [...prev, message]);
      }
    );

    return (
      <div className="flex w-80 flex-col gap-4 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-semibold text-zinc-700">
          BroadcastChannel demo
        </h3>

        <button
          className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
          onClick={() => post(`Mensagem ${messages.length + 1}`)}
        >
          Enviar mensagem
        </button>

        <ul className="flex flex-col gap-1 text-sm text-zinc-600">
          {messages.map((msg, index) => (
            <li key={index} className="rounded bg-zinc-100 px-2 py-1">
              {msg}
            </li>
          ))}
        </ul>
      </div>
    );
  },
  play: testDefaultBroadcastChannel,
};
