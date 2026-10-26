<script lang="ts">
  import { useBroadcastChannel } from '../';

  const { post } = useBroadcastChannel('test', () => {});
</script>

<button data-testid="button" onclick={() => post('x')}>Send</button>
