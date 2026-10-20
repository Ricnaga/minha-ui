import { useCallback, useState } from 'react';

export type UseCopyToClipboardState =
  | { status: 'idle' }
  | { status: 'success'; copiedValue: string }
  | { status: 'error'; error: Error };

type UseCopyToClipboard = () => {
  copyToClipboard: (text: string) => Promise<boolean>;
  state: UseCopyToClipboardState;
  copiedValue: string | null;
  error: Error | null;
  isIdle: boolean;
  isCopied: boolean;
  isError: boolean;
  reset: () => void;
};

const IDLE_STATE: UseCopyToClipboardState = { status: 'idle' };

export const useCopyToClipboard: UseCopyToClipboard = () => {
  const [state, setState] = useState<UseCopyToClipboardState>(IDLE_STATE);

  const copyToClipboard = useCallback(
    async (text: string): Promise<boolean> => {
      try {
        await navigator.clipboard.writeText(text);
        setState({ status: 'success', copiedValue: text });
        return true;
      } catch (error) {
        const clipboardError =
          error instanceof Error
            ? error
            : new Error('Failed to copy to clipboard');
        setState({ status: 'error', error: clipboardError });
        return false;
      }
    },
    [],
  );

  const reset = useCallback(() => {
    setState(IDLE_STATE);
  }, []);

  return {
    state,
    copiedValue: state.status === 'success' ? state.copiedValue : null,
    error: state.status === 'error' ? state.error : null,
    isIdle: state.status === 'idle',
    isCopied: state.status === 'success',
    isError: state.status === 'error',
    copyToClipboard,
    reset,
  };
};
