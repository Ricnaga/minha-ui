import { computed, ref } from 'vue';
export function useTablePagination(data, config) {
    const internalPage = ref(1);
    const pageSize = computed(() => config?.pageSize ?? 10);
    const isServer = computed(() => config?.totalItems !== undefined);
    const isControlled = computed(() => config?.pageNumber !== undefined);
    const pageNumber = computed(() => (isControlled.value ? (config?.pageNumber ?? 1) : internalPage.value));
    const totalItems = computed(() => config?.totalItems ?? data.length);
    const totalPages = computed(() => Math.max(1, Math.ceil(totalItems.value / pageSize.value)));
    function handlePageChange(page) {
        if (!isControlled.value)
            internalPage.value = page;
        config?.onPageChange?.(page);
    }
    const items = computed(() => {
        if (!config || isServer.value)
            return data;
        const start = (pageNumber.value - 1) * pageSize.value;
        return data.slice(start, start + pageSize.value);
    });
    return {
        enabled: computed(() => Boolean(config)),
        pageNumber,
        pageSize,
        totalItems,
        totalPages,
        items,
        handlePageChange,
    };
}
