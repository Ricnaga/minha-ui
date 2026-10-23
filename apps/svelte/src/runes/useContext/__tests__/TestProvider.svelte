<script lang="ts">
  import { setContext } from 'svelte';

  import TestConsumer from './TestConsumer.svelte';
  import { testContext } from './context';

  setContext(testContext, 'test-value');
</script>

<TestConsumer />
