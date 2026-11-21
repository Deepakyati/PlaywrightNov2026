import {test, expect} from '@playwright/test';

test('input files 2', async({page})=>{
    await page.goto('https://playwrightautomation.com/practice.html#section-upload-standard');

    const fileInput = page.locator('input[type="file"]').nth(2);
    const selected = page.getByTestId('upload-hidden-result');

    const filepath = 'tests/13Input.pdf';

    await fileInput.setInputFiles(filepath);
    await expect(selected).toContainText('13Input.pdf');

})