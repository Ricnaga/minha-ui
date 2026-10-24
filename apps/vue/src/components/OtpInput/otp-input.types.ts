import type { OtpInputVariants } from '@/theme';

export interface UseOtpInputProps extends OtpInputVariants {
  length?: number;
  value?: string;
  defaultValue?: string;
  onOTPChange?: (value: string) => void;
  mask?: boolean;
  autoFocus?: boolean;
  id?: string;
  name?: string;
  className?: string;
  'aria-label'?: string;
  'data-testid'?: string;
}

export type OtpInputProps = UseOtpInputProps;

export interface OtpFieldProps {
  key: number;
  ref?: any;
  value: string;
  type: string;
  inputMode: string;
  autocomplete: string;
  maxlength: number;
  disabled: boolean;
  autofocus?: boolean;
  name?: string;
  'aria-label': string;
  'data-testid': string;
  class: string;
  onInput: (event: any) => void;
  onKeydown: (event: any) => void;
  onFocus: () => void;
  onPaste: (event: any) => void;
}

export interface UseOtpInputReturn {
  containerProps: any;
  fieldsProps: OtpFieldProps[];
}
