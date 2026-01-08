import type { ReactNode } from "react";

export type RequiredChildren<T = unknown> = T & {
  children: ReactNode;
};

export type DataTestidProps<T = unknown> = T & {
  "data-testid"?: string;
};
