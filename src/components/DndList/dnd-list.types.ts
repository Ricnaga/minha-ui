import type { ReactNode } from "react";
import type { DndListVariants } from "@/theme";

export interface UseDndListProps extends DndListVariants {
  listId: string;
  heading?: string;
  children?: ReactNode;
}

export type DndListProps = UseDndListProps;
