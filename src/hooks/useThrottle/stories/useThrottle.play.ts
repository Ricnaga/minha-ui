import type { PlayFunction } from "storybook/internal/types";
import { expect, userEvent, waitFor, within } from "storybook/test";

export const testDefaultThrottle: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  const button = canvas.getByTestId("throttle-button");
  const clickCountValue = canvas.getByTestId("click-count-value");
  const executionCountValue = canvas.getByTestId("execution-count-value");

  expect(clickCountValue).toHaveTextContent("0");
  expect(executionCountValue).toHaveTextContent("0");

  await user.click(button);
  await waitFor(() => {
    expect(clickCountValue).toHaveTextContent("1");
  });
  expect(executionCountValue).toHaveTextContent("1");

  await user.click(button);
  await user.click(button);
  await user.click(button);

  await waitFor(() => {
    expect(clickCountValue).toHaveTextContent("4");
  });

  await waitFor(
    () => {
      expect(executionCountValue).toHaveTextContent("2");
    },
    { timeout: 700 }
  );
};

export const testSearchInputThrottle: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  const searchInput = canvas.getByTestId("search-input");
  const requestCountValue = canvas.getByTestId("request-count-value");

  expect(requestCountValue).toHaveTextContent("0");

  await user.type(searchInput, "react");

  expect(searchInput).toHaveValue("react");

  await waitFor(
    () => {
      expect(requestCountValue).toHaveTextContent("1");
    },
    { timeout: 1500 }
  );

  await user.clear(searchInput);
  await user.type(searchInput, "vue");

  await waitFor(
    () => {
      expect(requestCountValue).toHaveTextContent("2");
    },
    { timeout: 1500 }
  );
};
