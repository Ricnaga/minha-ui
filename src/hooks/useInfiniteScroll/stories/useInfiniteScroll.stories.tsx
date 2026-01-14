/* eslint-disable react-hooks/rules-of-hooks */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { useInfiniteScroll } from "..";
import { testeDefaultInfiniteScroll } from "./useInfiniteScroll.play";

const meta: Meta = {
  title: "Hooks/useInfiniteScroll",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

// --------------------------------------------------
// Story padrão
// --------------------------------------------------
export const Default: StoryObj = {
  render: () => {
    const [items, setItems] = useState(
      Array.from({ length: 20 }, (_, i) => i + 1)
    );

    const loadMore = async () => {
      await new Promise((r) => setTimeout(r, 300)); // simula fetch
      setItems((prev) => [
        ...prev,
        ...Array.from({ length: 10 }, (_, i) => prev.length + i + 1),
      ]);
    };

    const { ref, isLoading } = useInfiniteScroll({ onLoadMore: loadMore });

    return (
      <div className="space-y-4 p-4 h-[150vh] overflow-auto">
        {items.map((item) => (
          <div key={item} className="p-4 bg-gray-200 rounded">
            Item {item}
          </div>
        ))}

        <div
          ref={ref}
          className="p-4 text-center text-gray-500 border border-dashed border-gray-400 rounded"
        >
          {isLoading ? "Carregando..." : "Scroll para carregar mais"}
        </div>
      </div>
    );
  },

  play: testeDefaultInfiniteScroll,
};
