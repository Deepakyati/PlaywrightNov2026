import { test, expect } from '@playwright/test';

test('Validate table', async ({ page }) => {

  await page.goto('https://letcode.in/table/');
  const shoppingTable = page.locator('#shopping');
  const headers = shoppingTable.locator('thead tr th');
  const headerCount = await headers.count();
  console.log(headerCount);
  expect(headerCount).toBe(2);

// rows count

  const rows = shoppingTable.locator('tbody tr td');
  const tablerows = await rows.count();
  console.log(tablerows);
  expect(tablerows).toBe(8);

  
  const appleRow = rows.filter({hasText:'Apple'});
  const appleprice = appleRow.locator('td').nth(1);

  await expect(appleprice).toHaveText('180');












  
});

