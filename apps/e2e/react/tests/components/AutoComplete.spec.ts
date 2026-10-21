import { test, expect } from '../test';

test.describe('AutoComplete', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-formularios-autocomplete--default');
  });

  test('should render the search input', async ({ story }) => {
    const input = story.canvas.getByRole('combobox');

    await expect(input).toBeVisible();
    await expect(input).toBeEnabled();
  });

  test('should filter the options while typing', async ({ story }) => {
    const input = story.canvas.getByRole('combobox');

    await input.click();
    await input.fill('Ban');

    await expect(
      story.canvas.getByRole('option', { name: 'Banana' }),
    ).toBeVisible();
  });
});
