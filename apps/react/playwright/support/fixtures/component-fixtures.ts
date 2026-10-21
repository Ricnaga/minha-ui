import type { Locator, Page } from '@playwright/test';

export interface ComponentFixtures {
  page: Page;
  getByRole: Page['getByRole'];
  getByLabel: Page['getByLabel'];
  getByPlaceholder: Page['getByPlaceholder'];
  getByText: Page['getByText'];
  getByTestId: Page['getByTestId'];
  locator: Page['locator'];
  waitForSelector: (selector: string) => Promise<Locator>;
}

export function createComponentFixtures(page: Page): ComponentFixtures {
  return {
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
}

export type { ComponentFixtures as ComponentFixturesType };
