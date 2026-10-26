<script lang="ts">
  import { useToggle } from '../useToggle.svelte';

  const { value, onToggle, setTrue, setFalse } = useToggle(false);
</script>

<div>
  <button on:click={setTrue} data-testid="set-true">True</button>
  <button on:click={setFalse} data-testid="set-false">False</button>
  <button on:click={onToggle} data-testid="toggle-button">Toggle</button>
  <p data-testid="value">{value ? 'true' : 'false'}</p>
</div>
