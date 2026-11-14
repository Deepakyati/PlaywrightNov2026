import {test, expect} from '@playwright/test';

test('Hidden element', async({page})=>{

    await page.goto('https://playwrightautomation.com/practice.html?');

    const inputBox1 = page.getByTestId('ajax-input-1');
    const inputBox2 = page.getByTestId('ajax-input-2');
    const checkbox = page.getByTestId('ajax-checkbox-1');
    const status = page.getByTestId('ajax-status');
    const ToggleInputBox2 = page.getByTestId('btn-toggle-input-2');
    const ToggleCheckbox2 = page.getByTestId('btn-toggle-checkbox-2');
    const checkbox2 = page.getByTestId('ajax-checkbox-2-field');
    const loadAjax = page.getByTestId('btn-load-ajax')
    const Ajaxcontent = page.getByTestId('ajax-content');


    await inputBox1.fill('Deepak');
    
    await checkbox.check();

    await expect(checkbox).toBeChecked();
    
    await ToggleInputBox2.click();
    await expect(status).toContainText('Input Box 2 shown');
    await expect(inputBox2).toBeVisible();
    await ToggleInputBox2.click();
    await expect(status).toContainText('Input Box 2 hidden');
    await expect(inputBox2).toBeHidden();

    await expect(checkbox2).toBeHidden;
    await ToggleCheckbox2.click();
    await expect(checkbox2).toBeVisible();
    await checkbox2.click();

    await loadAjax.click();
    await expect(Ajaxcontent).toBeVisible();


})