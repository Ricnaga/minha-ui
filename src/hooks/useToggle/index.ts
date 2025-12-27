import { useState } from "react";

export function useToggle(isTruthy: boolean = false) {
  const [isToggle, setAsToggle] = useState<boolean>(isTruthy);

  function handleToggle() {
    setAsToggle(!isToggle);
  }

  function handleClose() {
    setAsToggle(false);
  }

  function handleOpen() {
    setAsToggle(true);
  }

  return { isToggle, handleToggle, handleClose, handleOpen, setAsToggle };
}
