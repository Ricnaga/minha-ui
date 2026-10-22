<script lang="ts">
  import type { SpinnerProps } from './spinner.types';
  import { useSpinner } from './useSpinner.svelte';

  const props: SpinnerProps = $props();

  const { containerProps, wrapperProps, svgProps } = useSpinner(() => props);
</script>

<div {...containerProps}>
  <div {...wrapperProps}>
    <svg {...svgProps}>
      <circle cx="50" cy="50" r="20" />
    </svg>
  </div>
</div>
