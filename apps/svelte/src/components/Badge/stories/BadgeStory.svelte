<script lang="ts">
  import { Badge } from '../';
  import type { BadgeProps } from '../badge.types';

  type BadgeStoryProps = Omit<BadgeProps, 'children'> & {
    children?: string;
  };

  let { children = 'Carrinho', ...props }: BadgeStoryProps = $props();
</script>

<Badge {...props}>
  <button class="rounded-full bg-gray-200 p-2">{children}</button>
</Badge>
