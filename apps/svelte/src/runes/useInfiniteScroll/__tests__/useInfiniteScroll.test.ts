import { render } from '@testing-library/svelte';
import Test from './Test.svelte';

describe('useInfiniteScroll', () => {
  it('should render', () => {
    const { getByTestId } = render(Test);
    expect(getByTestId('target')).toBeDefined();
  });
});
