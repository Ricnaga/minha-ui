<script setup lang="ts">
import { useInput } from './useInput';

const props = withDefaults(
  defineProps<{
    label?: string;
    startIcon?: unknown;
    endIcon?: unknown;
    class?: string;
    id?: string;
    type?: string;
    variant?: 'underline' | 'outline';
    disabled?: boolean;
    required?: boolean;
    placeholder?: string;
    value?: string | number;
    onChange?: (e: Event) => void;
  }>(),
  {
    type: 'text',
    label: '',
    startIcon: undefined,
    endIcon: undefined,
    class: undefined,
    id: undefined,
    variant: 'outline',
    disabled: undefined,
    required: undefined,
    placeholder: undefined,
    value: undefined,
    onChange: undefined,
  },
);

const {
  containerProps,
  endIconProps,
  hasEndIcon,
  hasStartIcon,
  inputProps,
  labelProps,
  startIconProps,
  inputWrapperProps,
} = useInput(props);
</script>

<template>
  <div :class="(containerProps as Record<string, string | undefined>).class">
    <div
      v-if="hasStartIcon"
      data-testid="input-start-icon"
      :class="(startIconProps as Record<string, string | undefined>).class"
    >
      <slot name="startIcon">{{ props.startIcon }}</slot>
    </div>

    <div
      :class="(inputWrapperProps as Record<string, string | undefined>).class"
    >
      <input v-bind="inputProps">
      <label
        :for="(inputProps as Record<string, string | undefined>).id"
        :class="(labelProps as Record<string, string | undefined>).class"
      >{{ props.label }}</label>
    </div>

    <div
      v-if="hasEndIcon"
      data-testid="input-end-icon"
      :class="(endIconProps as Record<string, string | undefined>).class"
    >
      <slot name="endIcon">{{ props.endIcon }}</slot>
    </div>
  </div>
</template>
