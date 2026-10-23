<script lang="ts">
  import Info from 'phosphor-svelte/lib/Info';

  import { IconButton } from '../';
  import type { IconButtonProps } from '../icon-button.types';

  let props: IconButtonProps = $props();
</script>

<IconButton {...props} aria-label="Informações">
  <Info size={24} aria-hidden="true" />
</IconButton>
