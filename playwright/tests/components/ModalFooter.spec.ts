import { test, expect } from '../test';

test.describe('ModalFooter', () => {
  test('should render modal footer', async ({ story }) => {
    await story.navigate('components-interação-modal-modalfooter--default');

    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
