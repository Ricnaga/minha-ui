<script lang="ts">
  import { useRipple } from '../useRipple.svelte';

  const { handleRipple } = useRipple();
</script>

<button
  class="relative overflow-hidden px-6 py-3 bg-blue-600 text-white rounded-md"
  onclick={handleRipple}
  data-testid="ripple-button"
>
  Clique aqui
</button>
