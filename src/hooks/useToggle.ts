import { useState } from "react";

export function useToggle(isTruthy: boolean = false) {
  const [isToogle, setAsToggle] = useState<boolean>(isTruthy);

  function handleToggle() {
    setAsToggle(!isToogle);
  }

  return { isToogle, handleToggle };
}
