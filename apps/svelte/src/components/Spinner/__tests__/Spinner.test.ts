import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

import Spinner from '../Spinner.svelte';

describe('Spinner', () => {
  it('should render with role status and aria-busy', () => {
    render(Spinner);

    expect(screen.getByRole('status')).toHaveAttribute('aria-busy', 'true');
  });

  it('should render the svg inside the animated wrapper', () => {
    render(Spinner);

    const wrapper = screen.getByRole('status').querySelector('div');

    expect(wrapper).toHaveClass('animate-spin');
    expect(wrapper?.querySelector('svg')).not.toBeNull();
  });

  it('should apply the color and thickness to the icon', () => {
    render(Spinner, { props: { color: 'error', thickness: 'lg' } });

    const icon = screen.getByRole('status').querySelector('svg');

    expect(icon).toHaveClass('stroke-red-400');
    expect(icon).toHaveClass('stroke-[10px]');
  });
});
