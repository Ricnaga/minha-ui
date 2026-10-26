import { render } from '@testing-library/svelte';
import { flushSync } from 'svelte';
import Test from './Test.svelte';

describe('usePagination', () => {
  it('should return pagination info', () => {
    const { getByTestId } = render(Test);
    expect(getByTestId('total').textContent).toBe('3');
  });

  it('should go to next page', () => {
    const { getByTestId } = render(Test);
    const next = getByTestId('next');
    const page = getByTestId('page');

    next.click();
    flushSync();

    expect(page.textContent).toBe('2');
  });
});
