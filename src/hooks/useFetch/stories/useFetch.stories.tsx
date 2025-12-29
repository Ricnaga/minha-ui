import type { Meta } from "@storybook/react-vite";
import { useFetch } from "..";

const meta: Meta = {
  title: "Hooks/useFetch",
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;

export const Default = () => {
  const { data, isLoading, error, refetch } = useFetch<{ message: string }>({
    endpoint: "e3f1b3a2-1c34-4a7b-b3e6-6df6aee2c3f2",
    baseURL: "https://mocki.io/v1/",
  });

  return (
    <div className="p-5">
      <h3>useFetch Hook Demo</h3>
      <p>
        <strong>Loading:</strong> {JSON.stringify(isLoading)}
      </p>
      <p>
        <strong>Error:</strong> {error ? error.message : "null"}
      </p>
      <p>
        <strong>Data:</strong> {data ? JSON.stringify(data) : "null"}
      </p>
      <button
        onClick={refetch}
        className="text-white p-1 bg-blue-500 rounded cursor-pointer"
      >
        Refetch
      </button>
    </div>
  );
};
