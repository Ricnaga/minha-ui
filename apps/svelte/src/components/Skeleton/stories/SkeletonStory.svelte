<script lang="ts">
  import { Skeleton } from '../';
  import type { SkeletonProps } from '../skeleton.types';

  let { shape, class: className }: SkeletonProps = $props();
</script>

<Skeleton {shape} class={className} />
