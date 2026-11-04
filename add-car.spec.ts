import { test, expect } from '@playwright/test';

test('guest can prepare an Audi TT entry without submitting', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /guest log in/i }).click();
  await expect(page).toHaveURL(/panel\/garage/);

  await page.getByRole('button', { name: 'Add car' }).click();
  await page.getByLabel('Brand').selectOption({ label: 'Audi' });
  await page.getByLabel('Model').selectOption({ label: 'TT' });
  await page.getByRole('spinbutton', { name: 'Mileage' }).fill('12000');

  await expect(page.getByRole('button', { name: 'Add', exact: true })).toBeEnabled();
});