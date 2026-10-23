<script lang="ts">
  import { useContext } from '../useContext.svelte';
  import { demoContext, type DemoContextValue } from './demo-context';

  // Não desestruture o contexto: os valores reativos vivem nos getters.
  const context = useContext<DemoContextValue>({
    context: demoContext,
    hookName: 'useDemoContext',
    providerName: 'Demo',
  });
</script>

<div class="text-center">
  <p>Value from context: {context.value}</p>
  <button
    class="cursor-pointer rounded bg-blue-600 p-1 text-white"
    onclick={() => context.setValue('Updated value!')}
  >
    Update Value
  </button>
</div>
