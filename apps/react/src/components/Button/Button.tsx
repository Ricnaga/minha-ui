import { Spinner } from '../Spinner';
import type { ButtonProps } from './button.types';
import { useButton } from './useButton';

export function Button(props: ButtonProps) {
  const { buttonProps, children, isLoading, labelProps, spinnerProps } =
    useButton(props);

  const buttonChildren = isLoading ? (
    <>
      <Spinner {...spinnerProps} />
      <span {...labelProps}>{children}</span>
    </>
  ) : (
    children
  );

  return <button {...buttonProps}>{buttonChildren}</button>;
}
