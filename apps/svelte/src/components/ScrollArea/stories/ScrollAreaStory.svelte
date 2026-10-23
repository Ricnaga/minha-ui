<script lang="ts">
  import { ScrollArea } from '../';
  import type { ScrollAreaProps } from '../scroll-area.types';

  type ScrollAreaStoryProps = Omit<ScrollAreaProps, 'children'> & {
    count?: number;
    label?: string;
    layout?: 'stack' | 'row';
  };

  let {
    count = 20,
    label = 'Lista de itens',
    layout = 'stack',
    ...props
  }: ScrollAreaStoryProps = $props();

  const items = $derived(
    Array.from({ length: count }, (_, index) => index + 1),
  );
</script>

<ScrollArea {...props} aria-label={label}>
  {#if layout === 'row'}
    <ul class="flex gap-2 p-2">
      {#each items as item (item)}
        <li class="rounded bg-neutral-800 p-2 text-neutral-100">
          Item {item}
        </li>
      {/each}
    </ul>
  {:else}
    <ul class="space-y-2 p-2">
      {#each items as item (item)}
        <li class="rounded bg-neutral-800 p-2 text-neutral-100">
          Item {item}
        </li>
      {/each}
    </ul>
  {/if}
</ScrollArea>
