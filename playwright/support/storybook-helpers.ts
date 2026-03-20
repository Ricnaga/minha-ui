import type { StoryFixtures } from './fixtures/story-fixtures';

export const STORYBOOK_BASE_URL = 'http://localhost:6006';

export async function navigateToStory(
  storyFixtures: StoryFixtures,
  storyId: string,
): Promise<void> {
  await storyFixtures.page.goto(
    `${STORYBOOK_BASE_URL}/iframe.html?id=${storyId}&viewMode=story`,
  );
  await storyFixtures.page.waitForLoadState('networkidle');
}

export async function waitForCanvas(
  storyFixtures: StoryFixtures,
  timeout = 10000,
): Promise<void> {
  await storyFixtures.page.waitForSelector('[id="storybook-root"]', {
    timeout,
  });
  await storyFixtures.page.waitForLoadState('networkidle');
}
