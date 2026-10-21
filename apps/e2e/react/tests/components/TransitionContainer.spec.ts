import { test, expect } from '../test';

test.describe('TransitionContainer', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-estruturas-transitioncontainer--default');
  });

  test('should render the container and the toggle button', async ({
    story,
  }) => {
    await expect(
      story.canvas.getByTestId('transition-container'),
    ).toBeAttached();
    await expect(
      story.canvas.getByRole('button', { name: 'Alternar' }),
    ).toBeVisible();
  });

  test('should toggle when clicking Alternar', async ({ story }) => {
    const container = story.canvas.getByTestId('transition-container');
    const isHidden = (await container.getAttribute('aria-hidden')) === 'true';

    await story.canvas.getByRole('button', { name: 'Alternar' }).click();

    if (isHidden) {
      await expect(container).not.toHaveAttribute('aria-hidden', 'true');
      return;
    }

    await expect(container).toHaveAttribute('aria-hidden', 'true');
  });
});
