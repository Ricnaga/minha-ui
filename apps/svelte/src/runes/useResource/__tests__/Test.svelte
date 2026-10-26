<script lang="ts">
  import { useResource } from '../';

  const resource = useResource({ endpoint: '/test' });
</script>

<button data-testid="button" onclick={resource.refetch}>refetch</button>
