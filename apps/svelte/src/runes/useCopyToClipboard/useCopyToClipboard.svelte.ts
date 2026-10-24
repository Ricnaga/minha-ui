export type UseCopyToClipboardState =
  | { status: 'idle' }
  | { status: 'success'; copiedValue: string }
  | { status: 'error'; error: Error };

export function useCopyToClipboard() {
  let state = $state<UseCopyToClipboardState>({ status: 'idle' });

  const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      state = { status: 'success', copiedValue: text };
      return true;
    } catch (error) {
      const clipboardError =
        error instanceof Error
          ? error
          : new Error('Failed to copy to clipboard');
      state = { status: 'error', error: clipboardError };
      return false;
    }
  };

  const reset = () => {
    state = { status: 'idle' };
  };

  return {
    get state() {
      return state;
    },
    get copiedValue() {
      return state.status === 'success' ? state.copiedValue : null;
    },
    get error() {
      return state.status === 'error' ? state.error : null;
    },
    get isIdle() {
      return state.status === 'idle';
    },
    get isCopied() {
      return state.status === 'success';
    },
    get isError() {
      return state.status === 'error';
    },
    copyToClipboard,
    reset,
  };
}
