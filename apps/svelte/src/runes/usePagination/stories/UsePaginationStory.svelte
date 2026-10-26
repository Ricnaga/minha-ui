<script lang="ts">
  import { usePagination } from '../';

  const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
  const pagination = usePagination({ items, pageSize: 10 });
</script>

<div class="p-10 w-[400px] flex flex-col gap-4">
  <h3 class="text-lg font-semibold">usePagination</h3>
  <ul>
    {#each pagination.currentPageItems as item, i}
      <li data-key={i}>{item}</li>
    {/each}
  </ul>
  <div class="flex gap-2 items-center">
    <button onclick={pagination.onPrevPage} class="px-3 py-1 border rounded">Anterior</button>
    <span>Página {pagination.pagination.pageNumber} / {pagination.totalPages}</span>
    <button onclick={pagination.onNextPage} class="px-3 py-1 border rounded">Próxima</button>
  </div>
</div>
