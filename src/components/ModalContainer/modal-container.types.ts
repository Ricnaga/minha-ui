import type { HTMLAttributes } from "react";
import type { ModalContainerVariants } from "../../theme";

export type UseModalContainerProps = ModalContainerVariants &
  HTMLAttributes<HTMLDivElement>;

export type ModalContainerProps = UseModalContainerProps;
