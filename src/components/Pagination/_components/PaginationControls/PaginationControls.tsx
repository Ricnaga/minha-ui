import { paginationControls } from "@/theme";

const { buttonPage, ellipsis } = paginationControls();

type PaginationControlsProps = {
  item: string | number;
  currentPage: number;
  onPageChange?: VoidFunction;
};

export function PaginationControls(props: PaginationControlsProps) {
  const { currentPage, item, onPageChange } = props;

  if (typeof item === "string") return <span className={ellipsis()}>...</span>;

  return (
    <button
      onClick={onPageChange}
      className={buttonPage({
        isCurrentPage: item === currentPage,
      })}
    >
      {props.item}
    </button>
  );
}
