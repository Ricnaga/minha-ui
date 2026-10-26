<script lang="ts">
  import { useThrottle } from '../';

  let count = $state(0);
  let throttledCount = $state(0);

  const updateThrottled = useThrottle(() => {
    throttledCount = count;
  }, 800);

  const increment = () => {
    count++;
    updateThrottled();
  };
</script>

<div class="p-10 w-[400px] flex flex-col gap-4">
  <p class="text-sm text-neutral-700">
    Clique no botão. O valor <strong>throttled</strong> é atualizado no
    máximo uma vez a cada 800ms.
  </p>

  <button
    class="border px-4 py-2 rounded bg-blue-500 text-white"
    onclick={increment}
  >
    Incrementar
  </button>

  <div class="mt-4 flex flex-col gap-2 text-sm">
    <p>
      <strong>Cliques:</strong>
      <span data-testid="click-count">{count}</span>
    </p>

    <p>
      <strong>Throttled:</strong>
      <span data-testid="throttled-count">{throttledCount}</span>
    </p>
  </div>
</div>
