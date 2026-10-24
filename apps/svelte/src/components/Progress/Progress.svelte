<script lang="ts">
  import type { ProgressProps } from './progress.types';
  import { useProgress } from './useProgress.svelte';

  const props: ProgressProps = $props();
  const { coreProps, wrapperProps } = useProgress(() => props);
</script>

<div {...wrapperProps}>
  <div {...coreProps}></div>
</div>
