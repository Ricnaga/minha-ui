import { render } from '@testing-library/svelte';
import { flushSync } from 'svelte';
import Test from './Test.svelte';

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should return initial value immediately', () => {
    const { getByTestId } = render(Test);
    expect(getByTestId('debounced').textContent).toBe('initial');
  });

  it('should not update value before delay', async () => {
    const { getByTestId } = render(Test);
    const input = getByTestId('input') as HTMLInputElement;
    const debounced = getByTestId('debounced');

    input.value = 'updated';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    flushSync();

    vi.advanceTimersByTime(300);
    flushSync();

    expect(debounced.textContent).toBe('initial');
  });

  it('should update value after delay', async () => {
    const { getByTestId } = render(Test);
    const input = getByTestId('input') as HTMLInputElement;
    const debounced = getByTestId('debounced');

    input.value = 'updated';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    flushSync();

    vi.advanceTimersByTime(500);
    flushSync();

    expect(debounced.textContent).toBe('updated');
  });

  it('should reset timer on value change', async () => {
    const { getByTestId } = render(Test);
    const input = getByTestId('input') as HTMLInputElement;
    const debounced = getByTestId('debounced');

    input.value = 'updated1';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    flushSync();

    vi.advanceTimersByTime(400);
    flushSync();

    input.value = 'updated2';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    flushSync();

    vi.advanceTimersByTime(400);
    flushSync();

    expect(debounced.textContent).toBe('initial');

    vi.advanceTimersByTime(200);
    flushSync();

    expect(debounced.textContent).toBe('updated2');
  });
});
