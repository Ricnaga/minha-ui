import { render } from '@testing-library/svelte';
import Test from './Test.svelte';

describe('useResource', () => {
  it('should render', () => {
    const { getByTestId } = render(Test);
    expect(getByTestId('button')).toBeDefined();
  });
});
