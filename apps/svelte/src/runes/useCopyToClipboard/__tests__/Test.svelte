<script lang="ts">
  import { useCopyToClipboard } from '../';

  const clipboard = useCopyToClipboard();
</script>

<button data-testid="copy" onclick={() => clipboard.copyToClipboard('test text')}>Copy</button>
<button data-testid="reset" onclick={clipboard.reset}>Reset</button>
<span data-testid="copied">{clipboard.isCopied}</span>
<span data-testid="idle">{clipboard.isIdle}</span>
<span data-testid="error">{clipboard.isError}</span>
