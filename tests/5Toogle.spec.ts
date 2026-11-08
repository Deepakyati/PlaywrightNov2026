import {test, expect} from '@playwright/test';

test.describe('Toggle', ()=>{
    test.beforeEach('Togle test', async({page})=>{
        await page.goto('https://playwrightautomation.com/practice.html?');
    })

    test('Notification',async({page})=>{
        const notification = page.getByTestId('toggle-notifications');
        const alerts = page.getByTestId('toggle-email-alerts');
        const save = page.getByTestId('toggle-autosave')

        await expect(notification).not.toBeChecked();
        await notification.click();
        await expect(notification).toBeChecked();

        await expect(alerts).toBeChecked();
        await alerts.click();
        await expect(alerts).not.toBeChecked();
        

        await expect(save).not.toBeChecked();
        await save.click();
        await expect(save).toBeChecked();
    })
})