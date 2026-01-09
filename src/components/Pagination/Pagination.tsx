import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { PaginationButton } from "./_components/PaginationButton/PaginationButton";
import { PaginationControls } from "./_components/PaginationControls/PaginationControls";
import type { PaginationProps } from "./pagination.types";
import { usePagination } from "./usePagination";
import { pagination } from "@/theme";

const { base, description, icons, items, wrapper } = pagination();

export function Pagination(props: PaginationProps) {
  const { paginationItems, handlePageChange, currentPage, totalPages } =
    usePagination(props);

  return (
    <div className={base()}>
      <div className={wrapper()}>
        <PaginationButton
          aria-label="Página anterior"
          onPageChange={() => handlePageChange(currentPage - 1)}
        >
          <CaretLeftIcon className={icons()} />
        </PaginationButton>
        <div className={items()}>
          {paginationItems.map((item) => (
            <PaginationControls
              key={item.toString()}
              item={item}
              currentPage={currentPage}
              onPageChange={() => handlePageChange(item)}
            />
          ))}
        </div>
        <PaginationButton
          aria-label="Próxima página"
          onPageChange={() => handlePageChange(currentPage + 1)}
        >
          <CaretRightIcon className={icons()} />
        </PaginationButton>
      </div>
      <div className={description()}>
        Página {currentPage} de {totalPages}
      </div>
    </div>
  );
}
