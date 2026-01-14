/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useIntersectionObserver } from "../";
import { testDefaultIntersectionObserver } from "./useIntersectionObserver.play";

const meta: Meta = {
  title: "Hooks/useIntersectionObserver",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

// --------------------------------------------------
// Exemplo padrão com TailwindCSS
// --------------------------------------------------
export const Default: StoryObj = {
  render: () => {
    const { ref, isIntersecting } = useIntersectionObserver({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
      once: false,
    });

    return (
      <div className="h-[200vh] p-12">
        <p className="mb-6 text-lg text-gray-700">
          Scroll para ver o elemento observável
        </p>

        <div
          ref={ref}
          className={`mt-[150vh] h-24 flex items-center justify-center font-bold text-white transition-colors duration-300 ${
            isIntersecting ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {isIntersecting ? "Visível" : "Fora da tela"}
        </div>
      </div>
    );
  },
  play: testDefaultIntersectionObserver,
};
