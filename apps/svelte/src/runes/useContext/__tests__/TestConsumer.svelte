<script lang="ts">
  import { useContext } from '../useContext.svelte';
  import { testContext } from './context';

  const value = useContext<string>({
    context: testContext,
    hookName: 'useTest',
    providerName: 'Test',
  });
</script>

<span>{value}</span>
