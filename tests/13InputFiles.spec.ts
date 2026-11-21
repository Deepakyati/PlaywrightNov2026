import { test, expect } from '@playwright/test';

test('dynamic dropdown', async ({ page }) => {
  await page.goto('https://playwrightautomation.com/practice.html');

  const filePath1 = 'tests/13Input.pdf';
  const filePath2 = 'tests/13Input2.pdf';

  const selectedfile = page.getByTestId('upload-single-result');
  const fileInput = page.getByTestId('upload-single');

  await fileInput.setInputFiles(filePath1);

  await expect(selectedfile).toContainText('13Input.pdf');
  await expect(page.getByTestId('upload-single-status')).toBeVisible();

  //Multiple files upload
  const multipleInput = page.getByTestId('upload-multiple');
  const fileCount = page.getByTestId('upload-multiple-count');
  const selectedMultiplefile = page.getByTestId('upload-multiple-result');

  await multipleInput.setInputFiles(filePath1);
  await expect(fileCount).toHaveCount(1);
  await expect(selectedMultiplefile).toHaveText('13Input.pdf')
  await multipleInput.setInputFiles([filePath1, filePath2]);
  await expect(fileCount).toHaveText('2');
  await page.pause();







});