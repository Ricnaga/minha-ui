<script lang="ts">
  import { setContext } from 'svelte';

  import DemoConsumer from './DemoConsumer.svelte';
  import { demoContext, type DemoContextValue } from './demo-context';

  let value = $state('Hello Storybook!');

  const context: DemoContextValue = {
    get value() {
      return value;
    },
    setValue(nextValue: string) {
      value = nextValue;
    },
  };

  setContext(demoContext, context);
</script>

<DemoConsumer />
