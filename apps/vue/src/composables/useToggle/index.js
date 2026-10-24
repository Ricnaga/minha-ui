import { ref } from 'vue';
export function useToggle(isTruthy = false) {
    const isToggle = ref(isTruthy);
    function handleToggle() {
        isToggle.value = !isToggle.value;
    }
    function handleClose() {
        isToggle.value = false;
    }
    function handleOpen() {
        isToggle.value = true;
    }
    function setAsToggle(value) {
        isToggle.value = value;
    }
    return { isToggle, handleToggle, handleClose, handleOpen, setAsToggle };
}
