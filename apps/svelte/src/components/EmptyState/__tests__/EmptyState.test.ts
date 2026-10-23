import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

import EmptyState from '../EmptyState.svelte';

describe('EmptyState', () => {
  it('should render the default message when no message is provided', () => {
    render(EmptyState);

    expect(screen.getByText('Nenhum resultado encontrado')).toBeInTheDocument();
  });
});
