<script lang="ts">
  import { useClickAway } from '../';

  let { onOutsideClick } = $props<{ onOutsideClick: (event: Event) => void }>();
  const clickAway = useClickAway({ onOutsideClick });
</script>

<div data-testid="target" use:clickAway.action>Target</div>
