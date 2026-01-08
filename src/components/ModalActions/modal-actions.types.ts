import type { ModalActionsVariants } from "@/theme";
import type { DataTestidProps } from "@/types";
import type { HTMLAttributes } from "react";

export type UseModalActionsProps = ModalActionsVariants &
  HTMLAttributes<HTMLDivElement> &
  DataTestidProps;

export type ModalActionsProps = UseModalActionsProps;
