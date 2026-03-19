import { renderHook, act } from '@testing-library/react';
import { useCopyToClipboard } from '..';

const mockClipboard = {
  writeText: vi.fn().mockResolvedValue(undefined),
};

Object.defineProperty(navigator, 'clipboard', {
  value: mockClipboard,
  writable: true,
});

describe('useCopyToClipboard', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return initial state', () => {
    const { result } = renderHook(() => useCopyToClipboard());

    expect(result.current.copiedValue).toBeNull();
    expect(result.current.error).toBeNull();
    expect(result.current.isCopied).toBe(false);
  });

  it('should copy text to clipboard successfully', async () => {
    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      const success = await result.current.copyToClipboard('test text');
      expect(success).toBe(true);
    });

    expect(mockClipboard.writeText).toHaveBeenCalledWith('test text');
    expect(result.current.copiedValue).toBe('test text');
    expect(result.current.isCopied).toBe(true);
    expect(result.current.error).toBeNull();
  });

  it('should handle clipboard error', async () => {
    mockClipboard.writeText.mockRejectedValueOnce(new Error('Clipboard error'));

    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      const success = await result.current.copyToClipboard('test text');
      expect(success).toBe(false);
    });

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.isCopied).toBe(false);
    expect(result.current.copiedValue).toBeNull();
  });

  it('should reset state', async () => {
    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      await result.current.copyToClipboard('test text');
    });

    expect(result.current.isCopied).toBe(true);

    act(() => {
      result.current.reset();
    });

    expect(result.current.copiedValue).toBeNull();
    expect(result.current.error).toBeNull();
    expect(result.current.isCopied).toBe(false);
  });
});
