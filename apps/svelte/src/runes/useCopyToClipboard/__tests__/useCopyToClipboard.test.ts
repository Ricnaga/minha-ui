import { render } from '@testing-library/svelte';
import { flushSync } from 'svelte';
import Test from './Test.svelte';

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
    const { getByTestId } = render(Test);
    expect(getByTestId('copied').textContent).toBe('false');
    expect(getByTestId('idle').textContent).toBe('true');
  });

  it('should copy text to clipboard successfully', async () => {
    const { getByTestId } = render(Test);
    const button = getByTestId('copy');
    const copied = getByTestId('copied');

    button.click();
    await Promise.resolve();
    flushSync();

    expect(mockClipboard.writeText).toHaveBeenCalled();
    expect(copied.textContent).toBe('true');
  });

  it('should handle clipboard error', async () => {
    mockClipboard.writeText.mockRejectedValueOnce(new Error('Clipboard error'));
    const { getByTestId } = render(Test);
    const button = getByTestId('copy');
    const isError = getByTestId('error');

    button.click();
    await Promise.resolve();
    flushSync();

    expect(isError.textContent).toBe('true');
  });

  it('should reset state', async () => {
    const { getByTestId } = render(Test);
    const button = getByTestId('copy');
    const reset = getByTestId('reset');
    const copied = getByTestId('copied');

    button.click();
    await Promise.resolve();
    flushSync();

    reset.click();
    flushSync();

    expect(copied.textContent).toBe('false');
  });
});
