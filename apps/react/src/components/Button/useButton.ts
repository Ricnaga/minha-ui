import { useRipple } from '@/hooks';
import { button, buttonLabel } from '@/theme';
import type { MouseEvent } from 'react';
import type { SpinnerProps } from '../Spinner';
import type { ButtonProps, UseButtonProps } from './button.types';

export function useButton(props: UseButtonProps) {
  const {
    size = 'medium',
    radius = 'medium',
    variant = 'contained',
    color = 'primary',
    isLoading = false,
    disabled,
    children,
    className,
    onClick,
    ...rest
  } = props;

  const { handleRipple } = useRipple();

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    handleRipple(event);
    onClick?.(event);
  }

  const buttonProps: ButtonProps = {
    ...rest,
    disabled: isLoading || disabled,
    className: button({ size, radius, variant, color, className, isLoading }),
    onClick: handleClick,
  };

  const spinnerProps: SpinnerProps = {
    color,
    className: 'size-4',
  };

  const labelProps: { className: string } = {
    className: buttonLabel(),
  };

  return { buttonProps, isLoading, children, labelProps, spinnerProps };
}
