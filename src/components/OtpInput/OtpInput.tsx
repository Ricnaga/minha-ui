import type { OtpInputProps } from './otp-input.types';
import { useOtpInput } from './useOtpInput';

export function OtpInput(props: OtpInputProps) {
  const { containerProps, fieldsProps } = useOtpInput(props);

  return (
    <div {...containerProps}>
      {fieldsProps.map(({ key, ...fieldProps }) => (
        <input key={key} {...fieldProps} />
      ))}
    </div>
  );
}
