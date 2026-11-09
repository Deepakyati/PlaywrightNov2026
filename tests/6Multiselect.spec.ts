import {test, expect} from '@playwright/test';


test('multiselect', async({page})=>{
    await page.goto('https://playwrightautomation.com/practice.html?');

    const multi = page.getByTestId('multiselect-colors');

    await multi.selectOption('Nike')

})



