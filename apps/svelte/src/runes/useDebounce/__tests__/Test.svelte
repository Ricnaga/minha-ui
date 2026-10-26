<script lang="ts">
  import { useDebounce } from '../';

  let value = $state('initial');
  const debounced = useDebounce(value, 500);
</script>

<input data-testid="input" bind:value />
<span data-testid="debounced">{debounced.value}</span>
