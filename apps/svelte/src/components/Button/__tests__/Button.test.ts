import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

import Button from '../Button.svelte';

describe('Button', () => {
  it('should render the component', () => {
    const { container } = render(Button);

    expect(container).toBeInTheDocument();
  });
});
