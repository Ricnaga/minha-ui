<script lang="ts">
  import type { SpinnerProps } from './spinner.types';
  import { useSpinner } from './useSpinner.svelte';

  const {
    color,
    thickness,
    class: className,
    ...attrs
  }: SpinnerProps = $props();

  const { containerProps, wrapperProps, svgProps } = useSpinner(() => ({
    color,
    thickness,
    class: className,
  }));
</script>

<div {...containerProps}>
  <div {...wrapperProps}>
    <svg {...attrs} {...svgProps}>
      <circle cx="50" cy="50" r="20" />
    </svg>
  </div>
</div>
