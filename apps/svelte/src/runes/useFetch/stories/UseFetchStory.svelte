<script lang="ts">
  import { useFetch } from '../';

  const fetch = useFetch<{ title: string }>({
    endpoint: 'https://jsonplaceholder.typicode.com/posts/1',
  });
</script>

<div class="p-10 w-[400px] flex flex-col gap-4">
  <h3 class="text-lg font-semibold">useFetch</h3>
  {#if fetch.isLoading}
    <p>Carregando...</p>
  {:else if fetch.isError}
    <p>Erro ao carregar</p>
  {:else if fetch.data}
    <p>{fetch.data.title}</p>
  {/if}
  <button onclick={fetch.refetch} class="px-4 py-2 rounded bg-blue-600 text-white">
    Refetch
  </button>
</div>
