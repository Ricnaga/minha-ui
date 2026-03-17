import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState } from "react";
import { TopLoadingBarProvider, useTopLoadingBarContext } from "../..";
import { testTopLoadingBarProvider } from "./TopLoadingBarProvider.play";

const meta: Meta<typeof TopLoadingBarProvider> = {
  title: "Components/Feedback/TopLoadingBarProvider",
  component: TopLoadingBarProvider,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "info", "warning", "error"],
      description: "Cor da barra de carregamento",
      table: {
        category: "Variants",
        defaultValue: { summary: "primary" },
      },
    },
  },
  args: {
    color: "primary",
  },
};

export default meta;
type Story = StoryObj<typeof TopLoadingBarProvider>;

function DemoContent() {
  const { start, complete, progress, isAnimating } = useTopLoadingBarContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      start();
    } else {
      complete();
    }
  }, [isLoading, start, complete]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Top Loading Bar Provider</h1>
      <p className="mb-4">
        O provider gerencia automaticamente a barra de carregamento no topo da
        tela. Use os métodos do contexto para controlar o progresso.
      </p>
      <div className="space-y-4">
        <button
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 3000);
          }}
          className="px-4 py-2 bg-sky-700 text-white rounded-lg hover:bg-sky-800"
        >
          Simular Carregamento (3s)
        </button>
        <div className="text-sm text-gray-600">
          <p>Progress: {Math.round(progress)}%</p>
          <p>Animating: {isAnimating ? "Sim" : "Não"}</p>
        </div>
      </div>
    </div>
  );
}

export const Default: Story = {
  render: (args) => (
    <TopLoadingBarProvider {...args}>
      <DemoContent />
    </TopLoadingBarProvider>
  ),
  play: testTopLoadingBarProvider,
};
