<script lang="ts">
  import { Badge } from '../';
  import type { BadgeProps } from '../badge.types';

  const colors: NonNullable<BadgeProps['color']>[] = [
    'primary',
    'secondary',
    'success',
    'error',
    'warning',
    'info',
  ];
</script>

<div class="flex gap-4">
  {#each colors as color (color)}
    <Badge {color} value={5}>
      <button class="rounded-full bg-gray-200 p-4">{color}</button>
    </Badge>
  {/each}
</div>
