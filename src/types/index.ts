import type { ReactNode } from "react";

export type RequiredChildren<T = unknown> = T & {
  children: ReactNode;
};
