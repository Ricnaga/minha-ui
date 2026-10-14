import type { SelectOptions } from '../Select';

export interface UseAutoCompleteProps {
  options: SelectOptions[];

  /** Valor controlado do texto de busca (modo simples). */
  value?: string;
  /** Texto inicial no modo simples (não-controlado). */
  defaultValue?: string;
  onInputChange?: (value: string) => void;

  /** Habilita a seleção de múltiplos valores com chips. */
  isMultiple?: boolean;
  /** Valores selecionados controlados (modo múltiplo). */
  values?: SelectOptions[];
  /** Valores selecionados iniciais (modo múltiplo, não-controlado). */
  defaultValues?: SelectOptions[];
  onValuesChange?: (values: SelectOptions[]) => void;

  onSelect?: (option: SelectOptions) => void;
  filter?: (option: SelectOptions, query: string) => boolean;
  placeholder?: string;
  emptyMessage?: string;
  isDisabled?: boolean;
}

export type AutoCompleteProps = UseAutoCompleteProps;
