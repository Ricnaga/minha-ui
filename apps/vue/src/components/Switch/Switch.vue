<script setup lang="ts">
import { useSwitch } from './useSwitch';

const props = defineProps<{
  label?: string;
  onCheckedChange?: (checked: boolean) => void;
  class?: string;
  id?: string;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  size?: 'small' | 'medium';
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';
}>();

const { containerProps, trackProps, labelProps, hasLabel, labelContent } = useSwitch(props);
const tp = trackProps as unknown as Record<string, unknown>;
const cp = containerProps as unknown as Record<string, string | undefined>;
const lp = labelProps as unknown as Record<string, string | undefined>;
function onChange(e: Event) {
  const fn = tp.onChange as ((ev: Event) => void) | undefined;
  fn?.(e);
}
</script>

<template>
  <label :class="cp.class">
    <input
      :type="tp.type as 'checkbox'"
      :role="tp.role as string | undefined"
      :id="tp.id as string | undefined"
      :disabled="tp.disabled as boolean | undefined"
      :checked="tp.checked as boolean | undefined"
      :defaultChecked="tp.defaultChecked as boolean | undefined"
      :class="tp.class as string | undefined"
      @change="onChange"
    />
    <span v-if="hasLabel" :class="lp.class">{{ labelContent }}</span>
  </label>
</template>
