<script lang="ts">
  import { useLocalStorage } from '../';

  const storage = useLocalStorage<string>('test-key', 'default');
</script>

<span data-testid="value">{storage.value}</span>
<button data-testid="create" onclick={() => storage.create('new-value')}>create</button>
<button data-testid="remove" onclick={storage.remove}>remove</button>
<button data-testid="clear" onclick={storage.clear}>clear</button>
