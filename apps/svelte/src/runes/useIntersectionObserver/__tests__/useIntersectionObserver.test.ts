import { render } from '@testing-library/svelte';
import Test from './Test.svelte';

describe('useIntersectionObserver', () => {
  it('should render component', () => {
    const { getByTestId } = render(Test);
    expect(getByTestId('target')).toBeDefined();
  });
});
