<script lang="ts">
  import { Badge } from '../';
  import type { BadgeProps } from '../badge.types';

  const sizes: NonNullable<BadgeProps['size']>[] = ['small', 'medium', 'large'];
</script>

<div class="flex items-center gap-4">
  {#each sizes as size (size)}
    <Badge {size} value={3}>
      <button class="rounded-full bg-gray-200 p-4">{size}</button>
    </Badge>
  {/each}
</div>
