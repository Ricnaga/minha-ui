<script setup lang="ts">
import { useAccordionContent } from './useAccordionContent';

const { accordionContentWrapperProps, accordionContentInnerProps } =
  useAccordionContent();
</script>

<template>
  <div v-bind="accordionContentWrapperProps">
    <div v-bind="accordionContentInnerProps">
      <div class="p-2">
        <slot />
      </div>
    </div>
  </div>
</template>
