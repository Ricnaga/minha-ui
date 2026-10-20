import { useToggle } from '@/hooks';
import { inputPassword } from '@/theme';
import { EyeIcon, EyeSlashIcon } from '@phosphor-icons/react';
import type { ButtonHTMLAttributes } from 'react';
import type {
  InputPasswordProps,
  UseInputPasswordProps,
} from './input-password.types';

const { lockButton } = inputPassword();

export function useInputPassword(props: UseInputPasswordProps) {
  const { isToggle, handleToggle } = useToggle();

  const PasswordIcon = isToggle ? EyeIcon : EyeSlashIcon;

  const inputPasswordProps: InputPasswordProps = {
    ...props,
    type: isToggle ? 'text' : 'password',
  };

  const buttonProps: ButtonHTMLAttributes<HTMLButtonElement> = {
    type: 'button',
    'aria-label': isToggle ? 'Ocultar senha' : 'Mostrar senha',
    className: lockButton(),
    onClick: handleToggle,
  };

  return { inputPasswordProps, PasswordIcon, buttonProps };
}
