import type { HTMLAttributes } from "react";

export interface UseFocustrapProps extends HTMLAttributes<HTMLDivElement> {
  isFocus: boolean;
}

export type FocustrapProps = UseFocustrapProps;
