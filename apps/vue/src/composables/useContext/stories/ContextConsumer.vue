<script setup lang="ts">
import { useContext } from '../';
import { demoContext } from './demo-context';

const demo = useContext({
  context: demoContext,
  hookName: 'useDemoContext',
  providerName: 'Demo',
});

function handleUpdate() {
  demo.setValue('Updated value!');
}
</script>

<template>
  <div class="text-center">
    <p>Value from context: {{ demo.value }}</p>

    <button
      class="text-white bg-blue-600 rounded p-1 cursor-pointer"
      @click="handleUpdate"
    >
      Update Value
    </button>
  </div>
</template>
