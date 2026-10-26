<script lang="ts">
  import { useThrottle } from '../';

  let calls = $state(0);
  const throttled = useThrottle(() => {
    calls++;
  }, 500);
</script>

<button data-testid="button" onclick={throttled}>Click</button>
<span data-testid="calls">{calls}</span>
