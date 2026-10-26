import { render } from '@testing-library/svelte';
import { flushSync } from 'svelte';
import Test from './Test.svelte';

describe('useThrottle', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should call function immediately on first call', () => {
    const { getByTestId } = render(Test);
    const button = getByTestId('button');
    const calls = getByTestId('calls');

    button.click();
    flushSync();

    expect(calls.textContent).toBe('1');
  });

  it('should throttle calls within delay', () => {
    const { getByTestId } = render(Test);
    const button = getByTestId('button');
    const calls = getByTestId('calls');

    button.click();
    button.click();
    button.click();
    flushSync();

    expect(calls.textContent).toBe('1');

    vi.advanceTimersByTime(500);
    flushSync();

    expect(calls.textContent).toBe('2');
  });
});
