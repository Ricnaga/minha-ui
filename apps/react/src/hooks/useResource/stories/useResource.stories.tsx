import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, Suspense } from 'react';
import { useResource } from '../';
import { mockResourceFetch, testDefaultResource } from './useResource.play';

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
  title: 'Hooks/useResource',
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
      window.fetch = mockResourceFetch;

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

const Loading = () => <div data-testid="loading-value">Loading...</div>;

const ResourceDemo = ({
  endpoint,
  baseURL,
  params,
}: {
  endpoint: string;
  baseURL: string;
  params?: Record<string, string>;
}) => {
  const { data, refetch, invalidate } = useResource<{ message: string }>({
    endpoint,
    baseURL,
    params,
  });

  return (
    <div className="p-5">
      <h3>useResource Hook Demo</h3>
      <p>
        <strong>Data:</strong>{' '}
        <span data-testid="data-value">
          {data ? JSON.stringify(data) : 'null'}
        </span>
      </p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={refetch}
          className="text-white p-1 bg-blue-600 rounded cursor-pointer"
        >
          Refetch
        </button>
        <button
          onClick={invalidate}
          className="text-white p-1 bg-blue-600 rounded cursor-pointer"
        >
          Invalidate
        </button>
      </div>
    </div>
  );
};

export const Default: StoryObj = {
  render: () => (
    <Suspense fallback={<Loading />}>
      <ResourceDemo
        endpoint="posts/1"
        baseURL="https://jsonplaceholder.typicode.com"
      />
    </Suspense>
  ),
  play: testDefaultResource,
};

export const WithError: StoryObj = {
  render: () => (
    <Suspense fallback={<Loading />}>
      <ResourceDemo
        endpoint="this-does-not-exist-12345"
        baseURL="https://jsonplaceholder.typicode.com"
      />
    </Suspense>
  ),
};
