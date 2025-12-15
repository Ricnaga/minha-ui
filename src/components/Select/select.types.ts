import type { Key } from "react";

export type SelectOptions = {
  key: Key;
  value: string;
};

export interface UseSelectProps {
  options: SelectOptions[];
}

export type SelectProps = UseSelectProps;
