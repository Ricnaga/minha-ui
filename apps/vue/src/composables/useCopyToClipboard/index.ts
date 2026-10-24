import { ref, computed } from 'vue';

export type UseCopyToClipboardState =
  | { status: 'idle' }
  | { status: 'success'; copiedValue: string }
  | { status: 'error'; error: Error };

export function useCopyToClipboard() {
  const state = ref<UseCopyToClipboardState>({ status: 'idle' });

  const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      state.value = { status: 'success', copiedValue: text };
      return true;
    } catch (error) {
      const clipboardError =
        error instanceof Error
          ? error
          : new Error('Failed to copy to clipboard');
      state.value = { status: 'error', error: clipboardError };
      return false;
    }
  };

  const reset = () => {
    state.value = { status: 'idle' };
  };

  const copiedValue = computed(() => (state.value.status === 'success' ? state.value.copiedValue : null));
  const error = computed(() => (state.value.status === 'error' ? state.value.error : null));
  const isIdle = computed(() => state.value.status === 'idle');
  const isCopied = computed(() => state.value.status === 'success');
  const isError = computed(() => state.value.status === 'error');

  return {
    state,
    copiedValue,
    error,
    isIdle,
    isCopied,
    isError,
    copyToClipboard,
    reset,
  };
}
