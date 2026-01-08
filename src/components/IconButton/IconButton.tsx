import { Spinner } from "../Spinner";
import type { IconButtonProps } from "./icon-button.types";
import { useIconButton } from "./useIconButton";

export function IconButton(props: IconButtonProps) {
  const { iconButtonProps, children, isLoading } = useIconButton(props);

  const iconButtonChildren = isLoading ? (
    <div className="size-4">
      <Spinner />
    </div>
  ) : (
    children
  );

  return <button {...iconButtonProps}>{iconButtonChildren}</button>;
}
