import { getContext } from 'svelte';

type UseContextProps = {
  context: symbol;
  hookName: string;
  providerName: string;
};

/**
 * Lê um contexto criado com `setContext`, garantindo que o consumidor esteja
 * dentro do provider correspondente.
 *
 * A chave é um `symbol` exportado pelo módulo do provider — assim o contexto
 * é privado ao par provider/consumidor e o erro aponta o hook correto.
 * Mantenha a referência do objeto retornado (não desestruture): em Svelte 5 a
 * reatividade do contexto vive nos getters.
 */
export function useContext<T>({
  context,
  hookName,
  providerName,
}: UseContextProps): T {
  const data = getContext<T>(context);

  if (data === undefined) {
    throw new Error(
      `${hookName} must be used within a ${providerName}Provider`,
    );
  }

  return data;
}
