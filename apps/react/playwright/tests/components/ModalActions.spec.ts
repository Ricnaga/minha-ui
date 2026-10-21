import { test, expect } from '../test';

test.describe('ModalActions', () => {
  test('should render modal actions', async ({ story }) => {
    await story.navigate('components-interação-modal-modalactions--default');

    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
