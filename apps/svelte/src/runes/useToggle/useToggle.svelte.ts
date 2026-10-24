export function useToggle(isTruthy: boolean = false) {
  let isToggle = $state<boolean>(isTruthy);

  function handleToggle() {
    isToggle = !isToggle;
  }

  function handleClose() {
    isToggle = false;
  }

  function handleOpen() {
    isToggle = true;
  }

  function setAsToggle(value: boolean) {
    isToggle = value;
  }

  return {
    get isToggle() {
      return isToggle;
    },
    handleToggle,
    handleClose,
    handleOpen,
    setAsToggle,
  };
}
