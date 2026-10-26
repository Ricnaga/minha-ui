<script lang="ts">
  import { useFetch } from '../';

  const fetch = useFetch({ endpoint: '/test', isRequesting: false });
</script>

<button data-testid="button" onclick={fetch.refetch}>refetch</button>
<span data-testid="idle">{fetch.isIdle}</span>
