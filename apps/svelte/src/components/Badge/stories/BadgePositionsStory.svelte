<script lang="ts">
  import { Badge } from '../';
  import type { BadgeProps } from '../badge.types';

  const positions: NonNullable<BadgeProps['position']>[] = [
    'topRight',
    'topLeft',
    'bottomRight',
    'bottomLeft',
  ];
</script>

<div class="relative h-32 w-32 rounded-lg bg-gray-100">
  {#each positions as position, index (position)}
    <Badge {position} value={index + 1}>
      <div class="h-full w-full"></div>
    </Badge>
  {/each}
</div>
