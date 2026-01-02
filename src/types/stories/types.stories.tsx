 

import type { Meta, StoryObj } from "@storybook/react-vite";
import type { RequiredChildren } from "..";

const meta: Meta = {
  title: "Types",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const ChildrenRequired: StoryObj = {
  render: () => {
    // Componente que usa RequiredChildren
    type BoxProps = RequiredChildren<{ color?: string }>;

    // Componente Box com children obrigatórios
    const Box = ({ children, color }: BoxProps) => (
      <div
        className={`p-4 border-2 rounded-md ${
          color ? `bg-[${color}]` : "bg-gray-100"
        }`}
      >
        {children}
      </div>
    );

    // Componente Text que só recebe children
    const Text = ({ children }: RequiredChildren) => (
      <p className="text-lg font-semibold text-gray-800">{children}</p>
    );

    return (
      <div className="p-8 flex flex-col gap-6 w-[400px]">
        <h2 className="text-2xl font-bold text-gray-700">
          RequiredChildren – Tipagem de children obrigatória
        </h2>

        <p className="text-sm text-neutral-600">
          O tipo <code>RequiredChildren</code> garante que o componente sempre
          terá a propriedade <code>children</code>. Isso evita que o componente
          seja usado sem conteúdo, facilitando a manutenção do código.
        </p>

        <div className="mt-6 flex flex-col gap-4">
          {/* Exemplo 1: Box com cor */}
          <Box color="#cce7ff">
            <Text>Este é um exemplo de Box com Text como children</Text>
          </Box>

          {/* Exemplo 2: Box sem cor */}
          <Box>
            <Text>Outro Box sem cor, mas com children</Text>
          </Box>
        </div>

        <p className="mt-4 text-sm text-neutral-600">
          Tente usar o componente <code>&lt;Box /&gt;</code> sem passar o{" "}
          <code>children</code> e você verá um erro de TypeScript, já que{" "}
          <code>children</code> é obrigatório.
        </p>

        <div className="mt-6 text-sm text-gray-500">
          <p>
            <strong>Exemplo:</strong>
          </p>
          <pre className="bg-gray-200 p-2 rounded-md text-xs">{`<Box /> // Erro: 'children' é obrigatório`}</pre>
        </div>
      </div>
    );
  },
};
