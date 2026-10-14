import type {
  ChangeEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from 'react';
import type { SwitchVariants } from '@/theme';

export interface UseSwitchProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'color'>,
    SwitchVariants {
  /** Texto associado ao switch (renderizado ao lado). */
  label?: ReactNode;
  /** Disparado a cada troca, com o novo estado booleano. */
  onCheckedChange?: (checked: boolean) => void;
}

export type SwitchProps = UseSwitchProps;

export interface UseSwitchReturn {
  containerProps: LabelHTMLAttributes<HTMLLabelElement>;
  trackProps: InputHTMLAttributes<HTMLInputElement>;
  labelProps: HTMLAttributes<HTMLSpanElement>;
  hasLabel: boolean;
}

export type SwitchChangeEvent = ChangeEvent<HTMLInputElement>;
