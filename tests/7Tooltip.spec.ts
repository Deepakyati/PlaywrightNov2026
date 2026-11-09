import {test, expect} from '@playwright/test';

test('tool tip', async({page})=>{
    await page.goto('https://playwrightautomation.com/practice.html?');

    const tooltipState = page.getByTestId('tooltip-state');
    await expect(tooltipState).toContainText('Hidden');
})