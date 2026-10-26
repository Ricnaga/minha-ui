<script lang="ts">
  import { useInfiniteScroll } from '../';

  let items = $state(Array.from({ length: 10 }, (_, i) => i + 1));
  let page = $state(1);

  const infiniteScroll = useInfiniteScroll({
    onLoadMore: async () => {
      await new Promise((r) => setTimeout(r, 500));
      page++;
      items.push(...Array.from({ length: 10 }, (_, i) => page * 10 + i + 1));
    },
  });
</script>

<div class="h-[300px] overflow-auto w-[300px] border p-4">
  {#each items as item, i}
    <div class="py-2 border-b" data-key={i}>Item {item}</div>
  {/each}
  <div use:infiniteScroll.action class="py-4 text-center">
    {#if infiniteScroll.isLoading}
      <span>Carregando...</span>
    {/if}
  </div>
</div>
