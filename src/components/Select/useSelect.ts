import { useState, type ActivityProps, type ChangeEvent } from "react";
import { useToggle } from "../../hooks";
import type { UseSelectProps } from "./select.types";

export function useSelect(props: UseSelectProps) {
  const { options } = props;

  const { handleClose, isToogle, handleToggle, handleOpen } = useToggle();

  const [inputValue, setInputValue] = useState<string>("");

  function handleSelect(selectedValue: string) {
    setInputValue(selectedValue);
    handleClose();
  }

  function handleClear() {
    setInputValue("");
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  const hasInputValue: ActivityProps["mode"] = inputValue
    ? "visible"
    : "hidden";

  const isOpenDropdown: ActivityProps["mode"] = isToogle ? "visible" : "hidden";

  return {
    options,
    handleSelect,
    handleClear,
    handleChange,
    hasInputValue,
    isOpenDropdown,
    handleToggle,
    inputValue,
    handleOpen,
  };
}
