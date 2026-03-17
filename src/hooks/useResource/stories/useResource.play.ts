import type { PlayFunction } from "storybook/internal/types";
import { expect, waitFor, within } from "storybook/test";

export const testDefaultResource: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const dataElement = await canvas.findByTestId("data-value");

  await waitFor(
    () => {
      const value = dataElement.textContent;
      expect(value).not.toBe("null");
      expect(value).toContain("title");
    },
    { timeout: 10000 },
  );

  const refetchButton = canvas.getByRole("button", { name: /refetch/i });
  await refetchButton.click();

  await waitFor(
    () => {
      const value = dataElement.textContent;
      expect(value).not.toBe("null");
      expect(value).toContain("title");
    },
    { timeout: 10000 },
  );
};