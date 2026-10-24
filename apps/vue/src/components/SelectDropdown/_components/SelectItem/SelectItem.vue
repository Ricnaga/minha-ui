<script setup lang="ts">
import PopoverContent from '../../../PopoverContent/PopoverContent.vue';
import { selectItem } from '@/theme';
import { useSelectItem } from './useSelectItem';

const { item, list } = selectItem();
const { options, handleChangeItem, handleSelectedItem } = useSelectItem();
</script>

<template>
  <PopoverContent>
    <ul :class="list()">
      <li
        v-for="option in options"
        :key="option.key"
        :class="item({ isSelected: handleSelectedItem(option) })"
        @click="handleChangeItem(option)"
      >
        {{ option.value }}
      </li>
    </ul>
  </PopoverContent>
</template>
