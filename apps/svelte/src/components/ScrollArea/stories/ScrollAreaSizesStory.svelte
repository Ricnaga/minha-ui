<script lang="ts">
  import { ScrollArea } from '../';
  import type { ScrollAreaProps } from '../scroll-area.types';

  const sizes: NonNullable<ScrollAreaProps['size']>[] = ['sm', 'md', 'lg'];

  const items = Array.from({ length: 12 }, (_, index) => index + 1);
</script>

<div class="flex gap-4">
  {#each sizes as size (size)}
    <div class="flex flex-col gap-1 text-neutral-600">
      <span>{size}</span>
      <ScrollArea {size} class="h-48 w-64" aria-label={`Lista tamanho ${size}`}>
        <ul class="space-y-2 p-2">
          {#each items as item (item)}
            <li class="rounded bg-neutral-800 p-2 text-neutral-100">
              Item {item}
            </li>
          {/each}
        </ul>
      </ScrollArea>
    </div>
  {/each}
</div>
