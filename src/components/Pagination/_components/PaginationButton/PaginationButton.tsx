import { paginationButton } from "@/theme";
import type { ButtonHTMLAttributes } from "react";

interface PaginationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  onPageChange?: VoidFunction;
}

export function PaginationButton(props: PaginationButtonProps) {
  const { children, onPageChange, ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      className={paginationButton()}
      onClick={onPageChange}
    >
      {children}
    </button>
  );
}
