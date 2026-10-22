import type { InjectionKey } from 'vue';

export type DemoContextProps = {
  value: string;
  setValue: (nextValue: string) => void;
};

export const demoContext: InjectionKey<DemoContextProps> = Symbol('demo');
