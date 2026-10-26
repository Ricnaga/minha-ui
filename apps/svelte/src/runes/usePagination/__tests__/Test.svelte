<script lang="ts">
  import { usePagination } from '../';

  const items = Array.from({ length: 25 }, (_, i) => i);
  const pagination = usePagination({ items, pageSize: 10 });
</script>

<span data-testid="total">{pagination.totalPages}</span>
<span data-testid="page">{pagination.pagination.pageNumber}</span>
<button data-testid="next" onclick={pagination.onNextPage}>next</button>
