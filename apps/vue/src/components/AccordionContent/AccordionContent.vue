<script setup lang="ts">
import { useAccordionContent } from './useAccordionContent';

const { accordionContentWrapperProps, accordionContentInnerProps } = useAccordionContent();
const aw = accordionContentWrapperProps as unknown as Record<string, any>;
const ai = accordionContentInnerProps as unknown as Record<string, any>;
</script>

<template>
  <div :data-state="aw['data-state']" :class="aw.class" :style="aw.style">
    <div :class="ai.class">
      <div class="p-2">
        <slot />
      </div>
    </div>
  </div>
</template>
