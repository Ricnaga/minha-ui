<script lang="ts">
  import { useToggle } from '../useToggle.svelte';

  const toggle = useToggle(false);
</script>

<div class="p-6 flex flex-col gap-4">
  <p class="text-sm">Valor: {toggle.isToggle ? 'true' : 'false'}</p>
  <div class="flex gap-2">
    <button onclick={toggle.handleToggle} class="px-4 py-2 rounded bg-blue-600 text-white">Toggle</button>
    <button onclick={toggle.handleOpen} class="px-4 py-2 rounded bg-green-600 text-white">Open</button>
    <button onclick={toggle.handleClose} class="px-4 py-2 rounded bg-red-600 text-white">Close</button>
    <button onclick={() => toggle.setAsToggle(true)} class="px-4 py-2 rounded bg-gray-600 text-white">Set true</button>
    <button onclick={() => toggle.setAsToggle(false)} class="px-4 py-2 rounded bg-gray-600 text-white">Set false</button>
  </div>
</div>
