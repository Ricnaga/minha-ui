import { Input } from "src/components/Input";
import type { InputPasswordProps } from "./input-password.types";
import { useInputPassword } from "./useInputPassword";

export function InputPassword(props: InputPasswordProps) {
  const { inputPasswordProps, PasswordIcon, buttonProps } =
    useInputPassword(props);

  return (
    <Input
      {...inputPasswordProps}
      endIcon={
        <button {...buttonProps}>
          <PasswordIcon />
        </button>
      }
    />
  );
}
