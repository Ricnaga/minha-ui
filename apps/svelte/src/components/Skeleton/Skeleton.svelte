<script lang="ts">
  import type { SkeletonProps } from './skeleton.types';
  import { useSkeleton } from './useSkeleton.svelte';

  const { shape, class: className, ...attrs }: SkeletonProps = $props();

  const { skeletonProps } = useSkeleton(() => ({ shape, class: className }));
</script>

<div {...attrs} {...skeletonProps}></div>
