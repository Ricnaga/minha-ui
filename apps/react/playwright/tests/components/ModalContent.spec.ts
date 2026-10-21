import { test, expect } from '../test';

test.describe('ModalContent', () => {
  test('should render modal content', async ({ story }) => {
    await story.navigate('components-interação-modal-modalcontent--default');

    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
