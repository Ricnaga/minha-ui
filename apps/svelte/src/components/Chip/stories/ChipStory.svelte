<script lang="ts">
  import { Chip } from '../';
  import type { ChipProps } from '../chip.types';

  type ChipStoryProps = Omit<ChipProps, 'children'> & {
    children?: string;
  };

  let { children = 'Chip', ...props }: ChipStoryProps = $props();
</script>

<Chip {...props}>{children}</Chip>
