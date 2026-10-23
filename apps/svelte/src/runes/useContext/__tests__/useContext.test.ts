import { render, screen } from '@testing-library/svelte';
import { describe, expect, it, vi } from 'vitest';

import TestConsumer from './TestConsumer.svelte';
import TestProvider from './TestProvider.svelte';

describe('useContext', () => {
  it('should return the context value when used within the provider', () => {
    render(TestProvider);

    expect(screen.getByText('test-value')).toBeInTheDocument();
  });

  it('should throw an error when used outside the provider', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => render(TestConsumer)).toThrow(
      'useTest must be used within a TestProvider',
    );

    errorSpy.mockRestore();
  });
});
