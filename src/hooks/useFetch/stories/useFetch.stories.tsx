/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect } from 'react';
import { useFetch } from '..';
import { mockFetch, testDefaultFetch } from './useFetch.play';

let originalFetch: typeof window.fetch | null = null;

function RestoreFetch() {
  useEffect(
    () => () => {
      if (!originalFetch) return;

      window.fetch = originalFetch;
      originalFetch = null;
    },
    [],
  );

  return null;
}

const meta: Meta = {
  title: 'Hooks/useFetch',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      // Substitui o fetch ANTES do mount para o fetch inicial já usar o mock
      if (!originalFetch) {
        originalFetch = window.fetch;
      }
      window.fetch = mockFetch;

      return (
        <>
          <Story />
          <RestoreFetch />
        </>
      );
    },
  ],
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const { data, isLoading, error, refetch } = useFetch<{ message: string }>({
      endpoint: 'e3f1b3a2-1c34-4a7b-b3e6-6df6aee2c3f2',
      baseURL: 'https://mocki.io/v1/',
    });

    return (
      <div className="p-5">
        <h3>useFetch Hook Demo</h3>
        <p>
          <strong>Loading:</strong>{' '}
          <span data-testid="loading-value">{JSON.stringify(isLoading)}</span>
        </p>
        <p>
          <strong>Error:</strong>{' '}
          <span data-testid="error-value">
            {error ? error.message : 'null'}
          </span>
        </p>
        <p>
          <strong>Data:</strong>{' '}
          <span data-testid="data-value">
            {data ? JSON.stringify(data) : 'null'}
          </span>
        </p>

        <button
          onClick={refetch}
          className="text-white p-1 bg-blue-500 rounded cursor-pointer"
        >
          Refetch
        </button>
      </div>
    );
  },
  play: testDefaultFetch,
};
