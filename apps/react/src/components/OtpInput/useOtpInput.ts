import { useRef, useState } from 'react';
import type { ClipboardEvent, KeyboardEvent } from 'react';
import { otpInput } from '@/theme';
import type {
  OtpFieldProps,
  UseOtpInputProps,
  UseOtpInputReturn,
} from './otp-input.types';

const { container, field } = otpInput();

const NON_DIGIT = /\D/g;

function toDigits(rawValue: string | undefined, length: number): string[] {
  const chars = (rawValue ?? '').slice(0, length).split('');
  return Array.from({ length }, (_, index) => chars[index] ?? '');
}

function sanitize(rawValue: string): string {
  return rawValue.replace(NON_DIGIT, '');
}

export function useOtpInput(props: UseOtpInputProps): UseOtpInputReturn {
  const {
    length = 6,
    value,
    defaultValue,
    onOTPChange,
    mask = false,
    disabled = false,
    isInvalid = false,
    autoFocus = false,
    id,
    name,
    className,
    'aria-label': ariaLabel = 'Código de verificação',
    'data-testid': dataTestId,
  } = props;

  const [internalValue, setInternalValue] = useState<string>(() =>
    toDigits(defaultValue, length).join(''),
  );

  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const digits = toDigits(currentValue, length);

  function focusField(index: number) {
    const boundedIndex = Math.min(Math.max(index, 0), length - 1);
    inputsRef.current[boundedIndex]?.focus();
  }

  function commitValue(nextDigits: string[]) {
    const nextValue = nextDigits.join('');
    if (!isControlled) setInternalValue(nextValue);
    onOTPChange?.(nextValue);
  }

  function handleChange(index: number, rawValue: string) {
    const nextChar = sanitize(rawValue).slice(-1);
    const nextDigits = [...digits];
    nextDigits[index] = nextChar;
    commitValue(nextDigits);

    if (nextChar) focusField(index + 1);
  }

  function handleKeyDown(
    index: number,
    event: KeyboardEvent<HTMLInputElement>,
  ) {
    if (event.key === 'Backspace' && !digits[index]) {
      event.preventDefault();
      const nextDigits = [...digits];
      nextDigits[index - 1] = '';
      commitValue(nextDigits);
      focusField(index - 1);
      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      focusField(index - 1);
      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      focusField(index + 1);
    }
  }

  function handleFocus(index: number) {
    inputsRef.current[index]?.select();
  }

  function handlePaste(event: ClipboardEvent<HTMLInputElement>) {
    event.preventDefault();
    const pasted = sanitize(event.clipboardData.getData('text')).slice(
      0,
      length,
    );
    if (!pasted) return;

    commitValue(toDigits(pasted, length));
    focusField(pasted.length - 1);
  }

  const fieldsProps: OtpFieldProps[] = digits.map((digit, index) => ({
    key: index,
    ref: (element) => {
      inputsRef.current[index] = element;
    },
    value: digit,
    type: mask ? 'password' : 'text',
    inputMode: 'numeric',
    autoComplete: index === 0 ? 'one-time-code' : 'off',
    maxLength: 1,
    disabled,
    autoFocus: autoFocus && index === 0,
    name,
    'aria-label': `Dígito ${index + 1} de ${length}`,
    'data-testid': `${dataTestId ?? 'otp-input'}-${index}`,
    className: field({ isInvalid, disabled }),
    onChange: (event) => handleChange(index, event.target.value),
    onKeyDown: (event) => handleKeyDown(index, event),
    onFocus: () => handleFocus(index),
    onPaste: handlePaste,
  }));

  return {
    containerProps: {
      id,
      role: 'group',
      'aria-label': ariaLabel,
      'data-testid': dataTestId,
      className: container({ className, disabled }),
    },
    fieldsProps,
  };
}
