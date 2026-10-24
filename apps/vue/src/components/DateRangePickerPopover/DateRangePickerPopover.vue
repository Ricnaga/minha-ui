<script setup lang="ts">
import Popover from '../Popover/Popover.vue';
import PopoverContent from '../PopoverContent/PopoverContent.vue';
import DateRangePickerCalendar from '../DateRangePickerCalendar/DateRangePickerCalendar.vue';
import DateRangePickerInput from '../DateRangePickerInput/DateRangePickerInput.vue';
import { useDateRangePickerPopover } from './useDateRangePickerPopover';

const { isOpen, handleOpen } = useDateRangePickerPopover();
</script>

<template>
  <Popover :is-open="isOpen" :on-popover-change="handleOpen" padding="sm" width="trigger">
    <DateRangePickerInput />
    <PopoverContent>
      <DateRangePickerCalendar />
    </PopoverContent>
  </Popover>
</template>
