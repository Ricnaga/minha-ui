import { inject, provide } from 'vue';
import { useTablePagination } from './useTablePagination';
export const TableConfigContextKey = Symbol('TableConfigContext');
export const TableDataContextKey = Symbol('TableDataContext');
export function useTableConfig() {
    const context = inject(TableConfigContextKey);
    if (!context) {
        throw new Error('useTableConfig must be used within a TableProvider');
    }
    return context;
}
export function useTableData() {
    return inject(TableDataContextKey);
}
export function useTableProvider(props) {
    const { data, keyExtractor, columns, isLoading = false, isError = false, loadingProps, emptyProps, errorProps, paginationProps, size = 'md', bordered = false, striped = false, hover = true, stickyHeader = false, } = props;
    const pagination = useTablePagination(data, paginationProps);
    const config = {
        columns,
        size,
        bordered,
        striped,
        hover,
        stickyHeader,
        pagination: {
            enabled: pagination.enabled.value,
            pageNumber: pagination.pageNumber.value,
            pageSize: pagination.pageSize.value,
            totalItems: pagination.totalItems.value,
            totalPages: pagination.totalPages.value,
            onPageChange: pagination.handlePageChange,
        },
    };
    const tableData = {
        data: pagination.items.value,
        keyExtractor,
        isLoading,
        isError,
        loadingProps,
        emptyProps,
        errorProps,
    };
    provide(TableConfigContextKey, config);
    provide(TableDataContextKey, tableData);
    return { config, data: tableData };
}
