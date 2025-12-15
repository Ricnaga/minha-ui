import { useState } from "react";

export function useToggle(isTruthy: boolean = false) {
  const [isToogle, setAsToggle] = useState<boolean>(isTruthy);

  function handleToggle() {
    setAsToggle(!isToogle);
  }

  function handleClose() {
    setAsToggle(false);
  }

  function handleOpen() {
    setAsToggle(true);
  }

  return { isToogle, handleToggle, handleClose, handleOpen, setAsToggle };
}
