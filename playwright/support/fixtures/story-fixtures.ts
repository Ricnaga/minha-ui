import type { Locator, Page } from '@playwright/test';

export interface StoryFixtures {
  page: Page;
  canvas: Locator;
  within: <T extends Locator>(
    locator: T,
  ) => {
    getByRole: T['getByRole'];
    getByLabel: T['getByLabel'];
    getByPlaceholder: T['getByPlaceholder'];
    getByText: T['getByText'];
    getByTestId: T['getByTestId'];
    locator: T['locator'];
  };
  navigateToStory: (storyId: string) => Promise<void>;
  waitForStory: (storyId: string) => Promise<Locator>;
}

export function createStoryFixtures(page: Page): StoryFixtures {
  return {
    page,
    canvas: page.locator('[data-story-block]'),
    within: <T extends Locator>(locator: T) => ({
      getByRole: locator.getByRole.bind(locator),
      getByLabel: locator.getByLabel.bind(locator),
      getByPlaceholder: locator.getByPlaceholder.bind(locator),
      getByText: locator.getByText.bind(locator),
      getByTestId: locator.getByTestId.bind(locator),
      locator: locator.locator.bind(locator),
    }),
    navigateToStory: async (storyId: string) => {
      await page.goto(`/iframe.html?id=${storyId}&viewMode=story`);
    },
    waitForStory: async (storyId: string) => {
      await page.goto(`/iframe.html?id=${storyId}&viewMode=story`);
      const canvas = page.locator('#storybook-root');
      await canvas.waitFor();
      return canvas;
    },
  };
}

export type { StoryFixtures as StoryFixturesType };
