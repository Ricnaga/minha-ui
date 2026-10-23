<script setup lang="ts">
import { Checkbox } from '../';

type CheckboxStoryProps = {
  disabled?: boolean;
  indeterminate?: boolean;
  class?: string;
};

const props = withDefaults(defineProps<CheckboxStoryProps>(), {
  disabled: undefined,
  indeterminate: undefined,
  class: undefined,
});
</script>

<template>
  <Checkbox
    :disabled="props.disabled"
    :indeterminate="props.indeterminate"
    :class="props.class"
    aria-label="Aceitar os termos"
  />
</template>
