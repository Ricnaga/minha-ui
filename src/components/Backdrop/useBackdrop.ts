import type { ActivityProps, HTMLAttributes } from "react";
import { backdrop } from "@/theme";
import type { BackdropProps, UseBackdropProps } from "./backdrop.types";
import type { SpinnerProps } from "../Spinner";

const { base, wrapper } = backdrop();

export function useBackdrop(props: UseBackdropProps) {
  const {
    isOpen = false,
    blur = "md",
    zIndex = 1000,
    isLoading = false,
    children,
    ...rest
  } = props;

  const backdropProps: BackdropProps = {
    ...rest,
    role: "presentation",
    "aria-hidden": "true",
    className: base({ isOpen, blur }),
    style: { zIndex },
  };

  const wrapperProps: HTMLAttributes<HTMLDivElement> = {
    onClick: (e) => e.stopPropagation(),
    className: wrapper({ isLoading }),
  };

  const spinnerProps: SpinnerProps = {
    color: "primary",
    thickness: "lg",
    className: "size-20",
  };

  const mode: ActivityProps["mode"] = isLoading ? "visible" : "hidden";

  return { children, backdropProps, mode, wrapperProps, spinnerProps };
}
