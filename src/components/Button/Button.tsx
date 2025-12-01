import type { ButtonProps } from "./button.types";
import { useButton } from "./useButton";

export function Button(props: ButtonProps) {
  const { buttonProps } = useButton(props);

  return <button {...buttonProps} />;
}
