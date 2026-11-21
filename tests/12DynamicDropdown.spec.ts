import {test, expect} from '@playwright/test';

test('dynamic dropdown', async({page})=>{
    await page.goto('https://playwrightautomation.com/practice.html?');

    const selectCountry = page.getByTestId('dep-dropdown-country');
    const selectedCountry = page.getByTestId('dep-selected-display');
    const selectState = page.getByTestId('dep-dropdown-state');
    const selectCity = page.getByTestId('dep-dropdown-city');


    await selectCountry.selectOption('India');
    await expect(selectedCountry).toHaveText('India');
    await selectState.selectOption('Karnataka');
    await expect(selectedCountry).toHaveText('India → Karnataka');
    await selectCity.selectOption('Bengaluru');
    await expect(selectedCountry).toHaveText('India → Karnataka → Bengaluru');


})