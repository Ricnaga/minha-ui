<script setup lang="ts">
import { useOtpInput } from './useOtpInput';
import type { OtpInputProps } from './otp-input.types';

const props = defineProps<OtpInputProps>();
const { containerProps, fieldsProps } = useOtpInput(props);
</script>

<template>
  <div v-bind="containerProps">
    <input
      v-for="(fieldProps, index) in fieldsProps"
      :key="index"
      :ref="fieldProps.ref"
      :value="fieldProps.value"
      :type="fieldProps.type as string"
      :inputmode="fieldProps.inputMode as string"
      :autocomplete="fieldProps.autocomplete"
      :maxlength="fieldProps.maxlength"
      :disabled="fieldProps.disabled"
      :autofocus="fieldProps.autofocus"
      :name="fieldProps.name"
      :aria-label="fieldProps['aria-label']"
      :data-testid="fieldProps['data-testid']"
      :class="fieldProps.class"
      @input="fieldProps.onInput"
      @keydown="fieldProps.onKeydown"
      @focus="fieldProps.onFocus"
      @paste="fieldProps.onPaste"
    />
  </div>
</template>
