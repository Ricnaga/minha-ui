import { render } from '@testing-library/svelte';
import Test from './Test.svelte';

describe('useFetch', () => {
  it('should render', () => {
    const { getByTestId } = render(Test);
    expect(getByTestId('button')).toBeDefined();
  });
});
