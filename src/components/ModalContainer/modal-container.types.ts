import type { HTMLAttributes } from "react";
import type { ModalContainerVariants } from "@/theme";
import type { DataTestidProps } from "@/types";

export type UseModalContainerProps = ModalContainerVariants &
  DataTestidProps &
  HTMLAttributes<HTMLDivElement>;

export type ModalContainerProps = UseModalContainerProps;
