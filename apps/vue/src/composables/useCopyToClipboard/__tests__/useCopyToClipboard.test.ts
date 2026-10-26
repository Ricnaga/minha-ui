import { renderHook, act } from '@testing-library/vue';
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

    expect(result.value.copiedValue).toBeNull();
    expect(result.value.error).toBeNull();
    expect(result.value.isCopied).toBe(false);
    expect(result.value.isIdle).toBe(true);
    expect(result.value.isError).toBe(false);
  });

  it('should copy text to clipboard successfully', async () => {
    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      const success = await result.value.copyToClipboard('test text');
      expect(success).toBe(true);
    });

    expect(mockClipboard.writeText).toHaveBeenCalledWith('test text');
    expect(result.value.copiedValue).toBe('test text');
    expect(result.value.isCopied).toBe(true);
  });

  it('should handle clipboard error', async () => {
    mockClipboard.writeText.mockRejectedValueOnce(new Error('Clipboard error'));

    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      const success = await result.value.copyToClipboard('test text');
      expect(success).toBe(false);
    });

    expect(result.value.error).toBeInstanceOf(Error);
    expect(result.value.isCopied).toBe(false);
    expect(result.value.isError).toBe(true);
  });

  it('should reset state', async () => {
    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      await result.value.copyToClipboard('test text');
    });

    expect(result.value.isCopied).toBe(true);

    act(() => {
      result.value.reset();
    });

    expect(result.value.copiedValue).toBeNull();
    expect(result.value.error).toBeNull();
    expect(result.value.isCopied).toBe(false);
    expect(result.value.isIdle).toBe(true);
  });
});
