/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useDisclosure } from "../";
import {
  testDefaultDisclosure,
  testFullExampleDisclosure,
} from "./useDisclosure.play";

const meta: Meta = {
  title: "Hooks/useDisclosure",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

// --------------------------------------------------
// Exemplo interativo padrão
// --------------------------------------------------
export const Default: StoryObj = {
  render: () => {
    const { isOpen, handleToggle } = useDisclosure();

    return (
      <div className="flex flex-col gap-4">
        <button
          onClick={handleToggle}
          className="px-6 py-3 bg-blue-600 text-white rounded-md"
        >
          {isOpen ? "Desativar" : "Ativar"}
        </button>
        <div>Status: {isOpen ? "Ativo" : "Inativo"}</div>
      </div>
    );
  },
  play: testDefaultDisclosure,
};

// --------------------------------------------------
// Exemplo completo com open/close
// --------------------------------------------------
export const FullExample: StoryObj = {
  render: () => {
    const { isOpen, handleToggle, handleOpen, handleClose } = useDisclosure();

    return (
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <button
            onClick={handleToggle}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Toggle
          </button>
          <button
            onClick={handleOpen}
            className="px-4 py-2 bg-green-600 text-white rounded-md"
          >
            Abrir
          </button>
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-red-600 text-white rounded-md"
          >
            Fechar
          </button>
        </div>
        <div>Status atual: {isOpen ? "Ativo" : "Inativo"}</div>

        <div style={{ marginTop: 16 }}>
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
                <td>isOpen</td>
                <td>boolean</td>
                <td>Estado atual do toggle</td>
              </tr>
              <tr>
                <td>handleToggle</td>
                <td>() =&gt; void</td>
                <td>Alterna entre true e false</td>
              </tr>
              <tr>
                <td>handleOpen</td>
                <td>() =&gt; void</td>
                <td>Define o estado como true</td>
              </tr>
              <tr>
                <td>handleClose</td>
                <td>() =&gt; void</td>
                <td>Define o estado como false</td>
              </tr>
              <tr>
                <td>setAsToggle</td>
                <td>
                  React.Dispatch&lt;React.SetStateAction&lt;boolean&gt;&gt;
                </td>
                <td>Permite setar o estado manualmente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  },
  play: testFullExampleDisclosure,
};
