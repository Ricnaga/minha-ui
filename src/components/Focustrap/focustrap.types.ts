import type { RequiredChildren } from "@/types";
import type { HTMLAttributes } from "react";

export type UseFocustrapProps = HTMLAttributes<HTMLDivElement> &
  RequiredChildren<{ isFocus: boolean }>;

export type FocustrapProps = UseFocustrapProps;
