import { CaretUpDownIcon, XIcon } from "@phosphor-icons/react";
import { Activity } from "react";
import { select } from "../../theme";
import type { SelectProps } from "./select.types";
import { useSelect } from "./useSelect";

const {
  clearButton,
  container,
  dropdown,
  dropdownWrapper,
  input,
  inputInnerWrapper,
  inputWrapper,
  item,
  itemInnerWrapper,
  itemWrapper,
  toggleButton,
  toggleWrapper,
  wrapper,
} = select();

export function Select(props: SelectProps) {
  const {
    options,
    inputValue,
    handleChange,
    handleOpen,
    handleClear,
    handleToggle,
    isOpenDropdown,
    hasInputValue,
    handleSelect,
  } = useSelect(props);

  const textField = (
    <div className={inputWrapper()}>
      <div className={inputInnerWrapper()}>
        <input
          value={inputValue}
          onChange={handleChange}
          onFocus={handleOpen}
          className={input()}
        />

        {/* Clear button */}
        <Activity mode={hasInputValue}>
          <button onClick={handleClear} className={clearButton()}>
            <XIcon />
          </button>
        </Activity>

        {/* Toggle */}
        <div className={toggleWrapper()}>
          <button className={toggleButton()} onClick={handleToggle}>
            <CaretUpDownIcon />
          </button>
        </div>
      </div>
    </div>
  );

  const dropDown = (
    <Activity mode={isOpenDropdown}>
      <div className={dropdownWrapper()}>
        <div className={dropdown()}>
          {options.map((option) => (
            <div
              className={itemWrapper()}
              key={option.key}
              onClick={() => handleSelect(option.value)}
            >
              <div
                className={itemInnerWrapper({
                  isSelected: option.value === inputValue,
                })}
              >
                <div className={item()}>{option.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Activity>
  );

  return (
    <div className={container()}>
      <div className={wrapper()}>
        {textField}
        {dropDown}
      </div>
    </div>
  );
}
