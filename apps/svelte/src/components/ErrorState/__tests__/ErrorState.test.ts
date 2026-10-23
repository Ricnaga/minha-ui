import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

import ErrorState from '../ErrorState.svelte';

describe('ErrorState', () => {
  it('should render the default message when no message is provided', () => {
    render(ErrorState);

    expect(screen.getByText('Algo deu errado')).toBeInTheDocument();
  });
});
