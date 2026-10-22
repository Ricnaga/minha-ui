import { inject, type InjectionKey } from 'vue';

type UseContextProps<T> = {
  context: InjectionKey<T>;
  hookName: string;
  providerName: string;
};

export function useContext<T>({
  context,
  hookName,
  providerName,
}: UseContextProps<T>) {
  const data = inject(context);

  if (data === undefined) {
    throw new Error(
      `${hookName} must be used within a ${providerName}Provider`,
    );
  }

  return data;
}
