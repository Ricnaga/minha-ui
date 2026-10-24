import type { SelectOptions } from '../Select/select.types';

export interface UseSelectProviderProps {
  children?: any;
  options: SelectOptions[];
  defaultValue?: SelectOptions[];
  onSelectChange: (value: SelectOptions[]) => void;
  isMultiple?: boolean;
  isRenderChips?: boolean;
}

export type SelectProviderProps = UseSelectProviderProps;

export interface SelectProviderContextProps extends UseSelectProviderProps {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleSelectChange: (option: SelectOptions) => void;
  selectedOptions: Map<string, SelectOptions>;
  selectOption: SelectOptions[];
}
