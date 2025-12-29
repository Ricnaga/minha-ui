import type { RequiredChildren } from "@/types";
import { createContext, useState } from "react";
import { useContext } from "..";

export default {
  title: "Hooks/useContext",
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

// Context de teste apenas para o story
type DemoContextType = { value: string; setValue: (v: string) => void };
const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const Default = () => {
  // Provider minimalista para o story
  const DemoProvider = ({ children }: RequiredChildren) => {
    const [value, setValue] = useState("Hello Storybook!");
    return (
      <DemoContext.Provider value={{ value, setValue }}>
        {children}
      </DemoContext.Provider>
    );
  };

  // Usando o hook
  const DemoConsumer = () => {
    const { value, setValue } = useContext({
      context: DemoContext,
      hookName: "useDemoContext",
      providerName: "Demo",
    });

    return (
      <div className="text-center">
        <p>Value from context: {value}</p>
        <button
          className="text-white bg-blue-500 rounded p-1 cursor-pointer"
          onClick={() => setValue("Updated value!")}
        >
          Update Value
        </button>
      </div>
    );
  };

  return (
    <DemoProvider>
      <DemoConsumer />
    </DemoProvider>
  );
};
