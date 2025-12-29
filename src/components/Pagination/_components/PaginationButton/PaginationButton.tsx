import { paginationButton } from "@/theme";
import type { ReactNode } from "react";

type PaginationButtonProps = {
  children: ReactNode;
  onPageChange?: VoidFunction;
};

export function PaginationButton(props: PaginationButtonProps) {
  const { children, onPageChange } = props;

  return (
    <button className={paginationButton()} onClick={onPageChange}>
      {children}
    </button>
  );
}
