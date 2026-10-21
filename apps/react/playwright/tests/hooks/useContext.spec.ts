import { test, expect } from '../test';

test.describe('useContext', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('hooks-usecontext--default');
  });

  test('should render context value', async ({ story }) => {
    const canvas = story.canvas;
    const valueText = canvas.getByText(/value from context/i);

    await expect(valueText).toBeVisible();
  });

  test('should update context value on button click', async ({ story }) => {
    const canvas = story.canvas;
    const updateButton = canvas.getByRole('button', { name: /update/i });

    await expect(updateButton).toBeVisible();
    await updateButton.click();

    const newValue = canvas.getByText(/Updated value/i);
    await expect(newValue).toBeVisible();
  });
});
