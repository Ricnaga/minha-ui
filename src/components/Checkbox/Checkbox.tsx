// https://uiverse.io/SelfMadeSystem/calm-cat-84
// https://uiverse.io/DaniloMGutavo/stupid-mouse-85
// https://uiverse.io/MattiaCode-IT/wise-elephant-53
// https://uiverse.io/kyle1dev/afraid-wasp-94
// https://uiverse.io/Tsiangana/tame-lionfish-36
// https://uiverse.io/elizama987/popular-insect-86
// https://uiverse.io/OptX71285225/sour-cougar-68

import { checkbox } from "../../theme";
import type { CheckboxProps } from "./checkbox.types";
import { useCheckbox } from "./useCheckbox";

export function Checkbox(props: CheckboxProps) {
  useCheckbox(props);

  return <input type="checkbox" className={checkbox()} />;
}
