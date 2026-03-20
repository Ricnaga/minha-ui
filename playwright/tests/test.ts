import {
  test as base,
  type Page,
  type Locator,
  expect,
} from '@playwright/test';

interface ComponentFixtures {
  page: Page;
  getByRole: Page['getByRole'];
  getByLabel: Page['getByLabel'];
  getByPlaceholder: Page['getByPlaceholder'];
  getByText: Page['getByText'];
  getByTestId: Page['getByTestId'];
  locator: Page['locator'];
  waitForSelector: (selector: string) => Promise<Locator>;
}

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
  navigateToStory: (storyId: string) => Promise<void>;
  waitForStory: (storyId: string) => Promise<Locator>;
}

export interface Fixtures {
  component: ComponentFixtures;
  story: StoryFixtures;
}

export const test = base.extend<Fixtures>({
  component: async ({ page }, use) => {
    const component: ComponentFixtures = {
      page,
      getByRole: page.getByRole.bind(page),
      getByLabel: page.getByLabel.bind(page),
      getByPlaceholder: page.getByPlaceholder.bind(page),
      getByText: page.getByText.bind(page),
      getByTestId: page.getByTestId.bind(page),
      locator: page.locator.bind(page),
      waitForSelector: async (selector: string) => {
        await page.waitForSelector(selector);
        return page.locator(selector);
      },
    };
    await use(component);
  },
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
      navigateToStory: async (storyId: string) => {
        await page.goto(`/iframe.html?id=${storyId}&viewMode=story`);
      },
      waitForStory: async (storyId: string) => {
        await page.goto(`/iframe.html?id=${storyId}&viewMode=story`);
        const canvas = page.locator(
          '#storybook-root, [id="storybook-root"], #root',
        );
        await canvas.waitFor({ timeout: 10000 });
        return canvas;
      },
    };
    await use(story);
  },
});

export { expect };
