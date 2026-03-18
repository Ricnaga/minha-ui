import { useCallback, useState } from "react";

export type UseCopyToClipboardState = {
  copiedValue: string | null;
  error: Error | null;
  isCopied: boolean;
};

type UseCopyToClipboard = () => {
  copyToClipboard: (text: string) => Promise<boolean>;
  copiedValue: string | null;
  error: Error | null;
  isCopied: boolean;
  reset: () => void;
};

export const useCopyToClipboard: UseCopyToClipboard = () => {
  const [state, setState] = useState<UseCopyToClipboardState>({
    copiedValue: null,
    error: null,
    isCopied: false,
  });

  const copyToClipboard = useCallback(async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      setState({
        copiedValue: text,
        error: null,
        isCopied: true,
      });
      return true;
    } catch (error) {
      const clipboardError =
        error instanceof Error
          ? error
          : new Error("Failed to copy to clipboard");
      setState({
        copiedValue: null,
        error: clipboardError,
        isCopied: false,
      });
      return false;
    }
  }, []);

  const reset = useCallback(() => {
    setState({
      copiedValue: null,
      error: null,
      isCopied: false,
    });
  }, []);

  return {
    ...state,
    copyToClipboard,
    reset,
  };
};
