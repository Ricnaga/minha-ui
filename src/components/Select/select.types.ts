import type { Key } from "react";

export type SelectOptions = {
  key: Key;
  value: string;
};

export interface UseSelectProps {
  options: SelectOptions[];
  defaultValue: SelectOptions[];
  onSelectChange: (value: SelectOptions[]) => void;
  isMultiple?: boolean;
  isRenderChips?: boolean;
}

export type SelectProps = UseSelectProps;
