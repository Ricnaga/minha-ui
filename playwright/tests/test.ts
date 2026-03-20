import {
  test as base,
  type Page,
  type Locator,
  expect,
} from '@playwright/test';

export const STORYBOOK_URL = 'http://localhost:6006';

interface StoryFixtures {
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
  navigate: (storyId: string) => Promise<void>;
}

export interface Fixtures {
  story: StoryFixtures;
}

export const test = base.extend<Fixtures>({
  story: async ({ page }, use) => {
    const story: StoryFixtures = {
      page,
      canvas: page.locator('#storybook-root, [id="storybook-root"], #root'),
      within: <T extends Locator>(locator: T) => ({
        getByRole: locator.getByRole.bind(locator),
        getByLabel: locator.getByLabel.bind(locator),
        getByPlaceholder: locator.getByPlaceholder.bind(locator),
        getByText: locator.getByText.bind(locator),
        getByTestId: locator.getByTestId.bind(locator),
        locator: locator.locator.bind(locator),
      }),
      navigate: async (storyId: string) => {
        await page.goto(
          `${STORYBOOK_URL}/iframe.html?id=${storyId}&viewMode=story`,
        );
        await page.waitForLoadState('networkidle');
      },
    };
    await use(story);
  },
});

export { expect };
