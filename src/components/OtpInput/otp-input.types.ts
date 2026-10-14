import type { ChangeEvent, ClipboardEvent, KeyboardEvent } from 'react';
import type { OtpInputVariants } from '@/theme';

export interface UseOtpInputProps extends OtpInputVariants {
  /** Quantidade de dígitos exibidos. */
  length?: number;
  /** Valor controlado. Tem precedência sobre `defaultValue`. */
  value?: string;
  /** Valor inicial no modo não-controlado. */
  defaultValue?: string;
  /** Disparado a cada alteração, sempre com a string completa. */
  onOTPChange?: (value: string) => void;
  /** Oculta os dígitos (type=password). */
  mask?: boolean;
  /** Foca o primeiro campo ao montar. */
  autoFocus?: boolean;
  /** Identificador do grupo. */
  id?: string;
  /** Nome aplicado aos campos para submissão de formulário. */
  name?: string;
  /** Classe aplicada ao container. */
  className?: string;
  'aria-label'?: string;
  /** Identificador de teste. */
  'data-testid'?: string;
}

export type OtpInputProps = UseOtpInputProps;

export interface OtpFieldProps {
  key: number;
  ref: (element: HTMLInputElement | null) => void;
  value: string;
  type: 'text' | 'password';
  inputMode: 'numeric';
  autoComplete: 'one-time-code' | 'off';
  maxLength: number;
  disabled: boolean;
  autoFocus?: boolean;
  name?: string;
  'aria-label': string;
  'data-testid': string;
  className: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onPaste: (event: ClipboardEvent<HTMLInputElement>) => void;
}

export interface UseOtpInputReturn {
  containerProps: {
    id?: string;
    role: 'group';
    'aria-label': string;
    'data-testid'?: string;
    className: string;
  };
  fieldsProps: OtpFieldProps[];
}
