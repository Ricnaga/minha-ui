<script lang="ts">
  import { Checkbox } from '../';
  import type { CheckboxProps } from '../checkbox.types';

  let props: CheckboxProps = $props();
</script>

<Checkbox {...props} aria-label="Aceitar os termos" />
