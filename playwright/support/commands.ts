import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export interface Commands {
  page: Page;
}

export async function waitForElement(
  page: Page,
  selector: string,
  options?: {
    state?: 'visible' | 'hidden' | 'attached' | 'detached';
    timeout?: number;
  },
): Promise<void> {
  await page.waitForSelector(selector, {
    state: options?.state ?? 'visible',
    timeout: options?.timeout ?? 5000,
  });
}

export async function clickAndWait(
  page: Page,
  selector: string,
  waitForSelector?: string,
): Promise<void> {
  await page.click(selector);
  if (waitForSelector) {
    await waitForElement(page, waitForSelector);
  }
}

export async function fillAndBlur(
  page: Page,
  selector: string,
  value: string,
): Promise<void> {
  await page.fill(selector, value);
  await page.locator(selector).blur();
}

export async function expectToBeVisible(
  page: Page,
  selector: string,
): Promise<void> {
  await expect(page.locator(selector)).toBeVisible();
}

export async function expectToHaveText(
  page: Page,
  selector: string,
  text: string | RegExp,
): Promise<void> {
  await expect(page.locator(selector)).toHaveText(text);
}

export const commands = {
  waitForElement,
  clickAndWait,
  fillAndBlur,
  expectToBeVisible,
  expectToHaveText,
};

export type CommandDefinitions = typeof commands;
