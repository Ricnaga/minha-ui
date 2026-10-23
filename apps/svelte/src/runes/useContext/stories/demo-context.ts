export type DemoContextValue = {
  value: string;
  setValue: (value: string) => void;
};

export const demoContext = Symbol('demo-context');
