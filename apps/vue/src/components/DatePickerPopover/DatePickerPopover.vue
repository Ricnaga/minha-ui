<script setup lang="ts">
import Popover from '../Popover/Popover.vue';
import PopoverContent from '../PopoverContent/PopoverContent.vue';
import DatePickerCalendar from '../DatePickerCalendar/DatePickerCalendar.vue';
import DatePickerInput from '../DatePickerInput/DatePickerInput.vue';
import { useDatePickerPopover } from './useDatePickerPopover';

const { isOpen, handleOpen } = useDatePickerPopover();
</script>

<template>
  <Popover :is-open="isOpen" :on-popover-change="handleOpen" padding="sm" width="trigger">
    <DatePickerInput />
    <PopoverContent>
      <DatePickerCalendar />
    </PopoverContent>
  </Popover>
</template>
