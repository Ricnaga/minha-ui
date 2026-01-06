import type { PlayFunction } from "storybook/internal/csf";
import { expect, within } from "storybook/test";

export const testDefaultCard: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText("Conteúdo do Card")).toBeInTheDocument();
};

export const testCompositionCard: PlayFunction = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Header
  await expect(canvas.getByText("Conteúdo do card title")).toBeInTheDocument();

  await expect(
    canvas.getByText("Conteúdo do card sub title")
  ).toBeInTheDocument();

  // Body / Description
  await expect(
    canvas.getByText("Conteúdo do card description")
  ).toBeInTheDocument();

  // Image
  const image = canvas.getByRole("img");
  await expect(image).toBeInTheDocument();
  await expect(image).toHaveAttribute(
    "src",
    expect.stringContaining("images.unsplash.com")
  );

  // Footer
  await expect(canvas.getByText("Conteúdo do card footer")).toBeInTheDocument();
};
