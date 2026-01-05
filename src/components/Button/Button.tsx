import { Spinner } from "../Spinner";
import type { ButtonProps } from "./button.types";
import { useButton } from "./useButton";

export function Button(props: ButtonProps) {
  const { buttonProps, children, isLoading } = useButton(props);

  const buttonChildren = isLoading ? <div className="w-4 h-4">
    <Spinner />
  </div> : children;

  return <button {...buttonProps}>{buttonChildren}</button>;
}
