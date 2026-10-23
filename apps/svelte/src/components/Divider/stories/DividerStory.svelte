<script lang="ts">
  import { Divider } from '../';
  import type { DividerProps } from '../divider.types';

  let { orientation, inset, class: className }: DividerProps = $props();
</script>

<Divider {orientation} {inset} class={className} />
