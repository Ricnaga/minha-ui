import { computed } from 'vue';
function getPaginationItems(currentPage, totalPages) {
    const pages = [];
    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++)
            pages.push(i);
        return pages;
    }
    pages.push(1);
    if (currentPage > 3)
        pages.push('...');
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++)
        pages.push(i);
    if (currentPage < totalPages - 2)
        pages.push('...');
    pages.push(totalPages);
    return pages;
}
export function usePagination(props) {
    const paginationItems = computed(() => getPaginationItems(props.currentPage, props.totalPages));
    function handlePageChange(page) {
        if (page >= 1 && page <= props.totalPages) {
            props.onPageChange?.(page);
        }
    }
    return {
        paginationItems,
        handlePageChange,
        currentPage: computed(() => props.currentPage),
        totalPages: computed(() => props.totalPages),
    };
}
