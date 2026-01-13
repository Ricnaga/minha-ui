import { PopoverContent } from "@/components";
import { useSelectItem } from "./useSelectItem";
import { selectItem } from "@/theme";

const { item, list } = selectItem();

export function SelectItem() {
  const { containerRef, options, handleSelectedItem, handleChangeItem } =
    useSelectItem();

  return (
    <div ref={containerRef}>
      <PopoverContent>
        <ul className={list()}>
          {options.map((option) => (
            <li
              key={option.key}
              className={item({
                isSelected: handleSelectedItem(option),
              })}
              onClick={() => handleChangeItem(option)}
            >
              {option.value}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </div>
  );
}
