import {test, expect} from '@playwright/test';

test('dropdown test', async({page})=>{

    await page.goto('https://playwrightautomation.com/practice.html?');

    const selectCountry = page.getByTestId('dropdown-country');
    const sortedAnimal = page.getByTestId('dropdown-sorted');



    await selectCountry.selectOption('India');
    await expect(selectCountry).toHaveValue('india');


    await sortedAnimal.selectOption('Cat');
    await expect(sortedAnimal).toHaveValue('cat');
    await expect(sortedAnimal).not.toHaveValue('dog');


    // Extract all visible option labels from the dropdown
    const options = await sortedAnimal.locator('option').allTextContents();

    // Filter out any placeholder like "Select an option" if present
    const actualOptions = options.map(text => text.trim());

    // Create an expected sorted copy
    const sortedOptions = [...actualOptions].sort((a, b) => a.localeCompare(b));

    // Assert they match exactly
    expect(actualOptions).toEqual(sortedOptions);

})