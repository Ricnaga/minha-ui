import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

import { Checkbox } from '../';

describe('Checkbox', () => {
  it('should render checkbox correctly', () => {
    render(Checkbox);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should toggle on click', async () => {
    render(Checkbox);

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox).not.toBeChecked();

    await fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    await fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
