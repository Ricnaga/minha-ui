<script setup lang="ts">
import { useToggle } from '../index';

const { value, onToggle, setTrue, setFalse } = useToggle(false);
</script>

<template>
  <div>
    <button data-testid="set-true" @click="setTrue">True</button>
    <button data-testid="set-false" @click="setFalse">False</button>
    <button data-testid="toggle-button" @click="onToggle">Toggle</button>
    <p data-testid="value">{{ value ? 'true' : 'false' }}</p>
  </div>
</template>
