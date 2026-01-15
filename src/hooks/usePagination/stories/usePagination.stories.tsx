/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { usePagination } from "../";
import { useEffect, useState } from "react";
import {
  testDefaultPagination,
  testPaginationFromMockApi,
} from "./usePagination.play";

const meta: Meta = {
  title: "Hooks/usePagination",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const items = Array.from({ length: 23 }, (_, i) => `Item ${i + 1}`);

    const {
      pagination,
      currentPageItems,
      onNextPage,
      onPrevPage,
      setPageSize,
      totalPages,
    } = usePagination({ items, pageSize: 5 });

    return (
      <div className="border border-gray-300 rounded-lg p-4 mb-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-2">Local Pagination</h3>
        <ul className="space-y-1">
          {currentPageItems.map((item, idx) => (
            <li key={idx} className="p-2 bg-gray-100 rounded">
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between mt-4">
          <div>
            <button
              onClick={onPrevPage}
              disabled={pagination.pageNumber === 1}
              className="px-3 py-1 mr-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              Prev
            </button>
            <button
              onClick={onNextPage}
              disabled={pagination.pageNumber === totalPages}
              className="px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              Next
            </button>
          </div>
          <span className="text-sm">
            Page {pagination.pageNumber} / {totalPages}
          </span>
          <div>
            <label className="text-sm">
              Page Size:
              <select
                value={pagination.pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                className="ml-2 p-1 border border-gray-300 rounded"
              >
                {[5, 10, 15].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>
    );
  },
  play: testDefaultPagination,
};

export const FromMockApi: StoryObj = {
  render: () => {
    const [data, setData] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const totalItems = 42;
    const { pagination, onNextPage, onPrevPage, setPageSize, totalPages } =
      usePagination({
        pageNumber: 1,
        pageSize: 5,
        totalItems,
      });

    useEffect(() => {
      setLoading(true);
      // Simula fetch da API com delay
      const fetchData = new Promise<string[]>((resolve) => {
        setTimeout(() => {
          const start = (pagination.pageNumber - 1) * pagination.pageSize + 1;
          const end = Math.min(start + pagination.pageSize - 1, totalItems);
          const pageItems = [];
          for (let i = start; i <= end; i++) pageItems.push(`API Item ${i}`);
          resolve(pageItems);
        }, 500);
      });

      fetchData.then((items) => {
        setData(items);
        setLoading(false);
      });
    }, [pagination.pageNumber, pagination.pageSize]);

    return (
      <div className="border border-gray-300 rounded-lg p-4 shadow-sm">
        <h3 className="text-lg font-semibold mb-2">API Mock Pagination</h3>
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <ul className="space-y-1">
            {data.map((item, idx) => (
              <li key={idx} className="p-2 bg-gray-100 rounded">
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center justify-between mt-4">
          <div>
            <button
              onClick={onPrevPage}
              disabled={pagination.pageNumber === 1}
              className="px-3 py-1 mr-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              Prev
            </button>
            <button
              onClick={onNextPage}
              disabled={pagination.pageNumber === totalPages}
              className="px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              Next
            </button>
          </div>
          <span className="text-sm">
            Page {pagination.pageNumber} / {totalPages}
          </span>
          <div>
            <label className="text-sm">
              Page Size:
              <select
                value={pagination.pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                className="ml-2 p-1 border border-gray-300 rounded"
              >
                {[5, 10, 15].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>
    );
  },
  play: testPaginationFromMockApi,
};
