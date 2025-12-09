import type { IconButtonProps } from "./icon-button.types";
import { useIconButton } from "./useIconButton";

export function IconButton(props: IconButtonProps) {
  const { iconButtonProps } = useIconButton(props);

  return <button {...iconButtonProps} />;
}
