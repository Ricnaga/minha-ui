import { useState } from "react";
import type { UsePaginationProps } from "./pagination.types";

type BuildPaginationItemsArgs = {
  currentPage: number;
  totalPages: number;
};

function buildPaginationItems(args: BuildPaginationItemsArgs) {
  const { currentPage, totalPages } = args;
  const paginationNumbers = [];

  // Sempre mostrar a primeira página
  paginationNumbers.push(1);

  const startPage = Math.max(2, currentPage - 1);
  const endPage = Math.min(totalPages - 1, currentPage + 1);

  // Adiciona ellipsis antes das páginas
  if (startPage > 2) {
    paginationNumbers.push("previous-ellipsis");
  }

  // Adiciona páginas intermediárias
  for (let i = startPage; i <= endPage; i++) {
    paginationNumbers.push(i);
  }

  // Adiciona ellipsis depois das páginas
  if (endPage < totalPages - 1) {
    paginationNumbers.push("next-ellipsis");
  }

  // Sempre mostrar a última página, se houver mais de uma página
  if (totalPages > 1) {
    paginationNumbers.push(totalPages);
  }

  return paginationNumbers;
}

export function usePagination(props: UsePaginationProps) {
  const { totalPages } = props;

  const [currentPage, setCurrentPage] = useState<number>(1);

  function handlePageChange(pageNumber: number | string) {
    if (typeof pageNumber === "string") return;

    if (pageNumber < 1 || pageNumber > totalPages || pageNumber === currentPage)
      return;
    setCurrentPage(pageNumber);
  }

  const paginationItems = buildPaginationItems({
    currentPage,
    totalPages,
  });

  return { currentPage, paginationItems, handlePageChange, totalPages };
}
