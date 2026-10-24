import { ref } from 'vue';

import { otpInput } from '@/theme';

import type { UseOtpInputProps, UseOtpInputReturn } from './otp-input.types';

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

  const internalValue = ref<string>(toDigits(defaultValue, length).join(''));
  const inputsRef = ref<Array<HTMLInputElement | null>>([]);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue.value;
  const digits = toDigits(currentValue, length);

  function focusField(index: number) {
    const boundedIndex = Math.min(Math.max(index, 0), length - 1);
    inputsRef.value[boundedIndex]?.focus();
  }

  function commitValue(nextDigits: string[]) {
    const nextValue = nextDigits.join('');
    if (!isControlled) internalValue.value = nextValue;
    onOTPChange?.(nextValue);
  }

  function handleInput(index: number, event: any) {
    const rawValue = event.target?.value ?? '';
    const nextChar = sanitize(rawValue).slice(-1);
    const nextDigits = [...digits];
    nextDigits[index] = nextChar;
    commitValue(nextDigits);
    if (nextChar) focusField(index + 1);
  }

  function handleKeyDown(index: number, event: any) {
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
    inputsRef.value[index]?.select();
  }

  function handlePaste(event: any) {
    event.preventDefault();
    const pasted = sanitize(event.clipboardData?.getData('text') ?? '').slice(0, length);
    if (!pasted) return;
    commitValue(toDigits(pasted, length));
    focusField(pasted.length - 1);
  }

  const fieldsProps: any[] = digits.map((digit, index) => ({
    ref: (element: any) => {
      inputsRef.value[index] = element;
    },
    value: digit,
    type: mask ? 'password' : 'text',
    inputMode: 'numeric',
    autocomplete: index === 0 ? 'one-time-code' : 'off',
    maxlength: 1,
    disabled: !!disabled,
    autofocus: autoFocus && index === 0,
    name,
    'aria-label': `Dígito ${index + 1} de ${length}`,
    'data-testid': `${dataTestId ?? 'otp-input'}-${index}`,
    class: field({ isInvalid: !!isInvalid, disabled: !!disabled }),
    onInput: (event: any) => handleInput(index, event),
    onKeydown: (event: any) => handleKeyDown(index, event),
    onFocus: () => handleFocus(index),
    onPaste: handlePaste,
  }));

  return {
    containerProps: {
      id,
      role: 'group',
      'aria-label': ariaLabel,
      'data-testid': dataTestId,
      class: container({ className, disabled: !!disabled }),
    },
    fieldsProps,
  } as UseOtpInputReturn;
}
