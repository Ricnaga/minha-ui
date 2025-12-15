import type { Meta } from "@storybook/react-vite";
import { useRipple } from "../useRipple";

const meta: Meta = {
  title: "Hooks/useRipple",
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;

// --------------------------------------------------
// Exemplo interativo do hook
// --------------------------------------------------
export const Default = () => {
  const { handleRipple } = useRipple();

  return (
    <button
      onClick={handleRipple}
      className="relative overflow-hidden px-6 py-3 bg-blue-600 text-white rounded-md"
    >
      Clique aqui
    </button>
  );
};

// --------------------------------------------------
// Exemplo com aviso de atenção e props explicadas
// --------------------------------------------------
export const WithInfo = () => {
  const { handleRipple } = useRipple();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ fontWeight: 600 }}>⚠️ Atenção:</div>
      <ul>
        <li>
          O botão deve possuir <code>position: relative</code>
        </li>
        <li>
          O botão deve possuir <code>overflow: hidden</code>
        </li>
        <li>
          Essas regras garantem que o ripple fique contido dentro do botão
        </li>
      </ul>

      <button
        onClick={handleRipple}
        className="relative overflow-hidden px-6 py-3 bg-indigo-600 text-white rounded-md"
      >
        Clique em mim
      </button>

      <div className="mt-4">
        <strong>Props retornadas pelo hook:</strong>
        <table border={1} cellPadding={4}>
          <thead>
            <tr>
              <th>Propriedade</th>
              <th>Tipo</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">handleRipple</td>
              <td className="p-2">
                (event: MouseEvent&lt;HTMLButtonElement&gt;) =&gt; void
              </td>
              <td className="p-2">
                Função responsável por criar e animar o efeito ripple no
                elemento clicado
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
