<script setup lang="ts">
import type { TransitionContainerProps } from './transition-container.types';
import { useTransitionContainer } from './useTransitionContainer';

// `aria-hidden` e `inert` são calculados pelo composable: os atributos do
// consumidor entram antes para que o estado do componente prevaleça.
defineOptions({ inheritAttrs: false });

/** `default: undefined` evita que o cast booleano do Vue transforme a prop
 * ausente em `false`, o que impediria o cálculo de `aria-hidden`/`inert`. */
const props = withDefaults(defineProps<TransitionContainerProps>(), {
  ariaHidden: undefined,
  inert: undefined,
});

const { transitionContainerProps } = useTransitionContainer(props);
</script>

<template>
  <div v-bind="{ ...$attrs, ...transitionContainerProps }">
    <slot />
  </div>
</template>
