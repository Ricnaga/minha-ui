<script lang="ts">
  import { useResource } from '../';

  const resource = useResource<{ title: string }>({
    endpoint: 'https://jsonplaceholder.typicode.com/posts/1',
  });
</script>

<div class="p-10 w-[400px] flex flex-col gap-4">
  <h3 class="text-lg font-semibold">useResource</h3>
  <p>{resource.data?.title}</p>
  <button onclick={resource.refetch} class="px-4 py-2 rounded bg-blue-600 text-white">
    Refetch
  </button>
</div>
