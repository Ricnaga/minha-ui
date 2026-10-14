import type { RequiredChildren } from '@/types';
import type { AutoCompleteProps } from '../AutoComplete/auto-complete.types';
import type { useAutoCompleteProvider } from './useAutoCompleteProvider';

export type UseAutoCompleteProviderProps = RequiredChildren & AutoCompleteProps;

export type AutoCompleteProviderProps = UseAutoCompleteProviderProps;

export type AutoCompleteProviderContextProps = Omit<
  ReturnType<typeof useAutoCompleteProvider>,
  'children'
>;
