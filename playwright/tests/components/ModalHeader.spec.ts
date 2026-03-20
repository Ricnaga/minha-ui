import { test, expect } from '../test';

test.describe('ModalHeader', () => {
  test('should render modal header', async ({ story }) => {
    await story.navigate('components-interação-modal-modalheader--default');

    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
