import {test, expect} from '@playwright/test';

test('tool tip', async({page})=>{
    await page.goto('https://playwrightautomation.com/practice.html?');

    const tooltipState = page.getByTestId('tooltip-state');
    await expect(tooltipState).toContainText('hidden');

    const tooltiptrigger = page.getByTestId('tooltip-trigger');
    await tooltiptrigger.hover();
    await expect(tooltipState).toContainText('visible');

    await page.mouse.move(0, 0);

  // Assert tooltip disappears and state switches back to hidden
    //await expect(tooltipBubble).toBeHidden();
    await expect(tooltipState).toContainText('hidden');
})