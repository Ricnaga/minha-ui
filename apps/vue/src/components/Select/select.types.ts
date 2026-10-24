export type SelectOptions = {
  key: string | number;
  value: string;
};

export interface UseSelectProps {
  options: SelectOptions[];
  defaultValue?: SelectOptions[];
  onSelectChange: (value: SelectOptions[]) => void;
  isMultiple?: boolean;
  isRenderChips?: boolean;
}

export type SelectProps = UseSelectProps;
