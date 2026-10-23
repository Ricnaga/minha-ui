<script lang="ts">
  import type { CheckboxProps } from './checkbox.types';
  import { useCheckbox } from './useCheckbox.svelte';

  const {
    disabled,
    indeterminate,
    class: className,
    ...attrs
  }: CheckboxProps = $props();

  const checkbox = useCheckbox(() => ({
    disabled,
    indeterminate,
    class: className,
  }));
</script>

<input {...attrs} {...checkbox.checkBoxProps} />
