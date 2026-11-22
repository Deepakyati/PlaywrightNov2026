import {test, expect} from '@playwright/test';

test('download practice', async({page})=>{
    await page.goto('https://playwrightautomation.com/practice.html#section-upload-downloads');

    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.getByTestId('btn-download-svg').first().click()
    ]);
    await page.pause();
    await download.saveAs('tests/15abcd.pdf')
})