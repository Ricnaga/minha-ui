import { ref } from 'vue';

export function useToggle(isTruthy: boolean = false) {
  const isToggle = ref<boolean>(isTruthy);

  function handleToggle() {
    isToggle.value = !isToggle.value;
  }

  function handleClose() {
    isToggle.value = false;
  }

  function handleOpen() {
    isToggle.value = true;
  }

  function setAsToggle(value: boolean) {
    isToggle.value = value;
  }

  return { isToggle, handleToggle, handleClose, handleOpen, setAsToggle };
}
