<script lang="ts">
  import { useLocalStorage } from '../';

  const storage = useLocalStorage<string>('storybook-example', 'initial value');
</script>

<div class="w-80 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
  <h3 class="mb-2 text-lg font-semibold text-zinc-900">
    useLocalStorage
  </h3>

  <p class="mb-4 text-sm text-zinc-600">
    <span class="font-medium text-zinc-800">Value:</span>
    {storage.value ?? null}
  </p>

  <div class="flex flex-wrap gap-2">
    <button
      onclick={() => storage.create('created value')}
      class="rounded-md bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
    >
      Create
    </button>

    <button
      onclick={storage.remove}
      class="rounded-md bg-amber-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-amber-800"
    >
      Remove
    </button>

    <button
      onclick={storage.clear}
      class="rounded-md bg-rose-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-rose-700"
    >
      Clear
    </button>
  </div>
</div>
