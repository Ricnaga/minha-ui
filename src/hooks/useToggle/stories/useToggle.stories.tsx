import type { Meta } from "@storybook/react-vite";
import { useToggle } from "..";

const meta: Meta = {
  title: "Hooks/useToggle",
};

export default meta;

// --------------------------------------------------
// Exemplo interativo padrão
// --------------------------------------------------
export const Default = () => {
  const { isToogle, handleToggle } = useToggle();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <button
        onClick={handleToggle}
        className="px-6 py-3 bg-blue-600 text-white rounded-md"
      >
        {isToogle ? "Desativar" : "Ativar"}
      </button>
      <div>Status: {isToogle ? "Ativo" : "Inativo"}</div>
    </div>
  );
};

// --------------------------------------------------
// Exemplo completo com open/close
// --------------------------------------------------
export const FullExample = () => {
  const { isToogle, handleToggle, handleOpen, handleClose } = useToggle();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", gap: 8 }}>
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
      <div>Status atual: {isToogle ? "Ativo" : "Inativo"}</div>

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
              <td>isToogle</td>
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
              <td>React.Dispatch&lt;React.SetStateAction&lt;boolean&gt;&gt;</td>
              <td>Permite setar o estado manualmente</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
