import type { RequiredChildren } from "@/types";
import type { SelectProps } from "../Select/select.types";
import type { useSelectProvider } from "./useSelectProvider";

export type UseSelectProviderProps = RequiredChildren & SelectProps;

export type SelectProviderProps = UseSelectProviderProps;

export type SelectProviderContextProps = Omit<
  ReturnType<typeof useSelectProvider>,
  "children"
>;
