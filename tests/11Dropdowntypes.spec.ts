import {test, expect} from '@playwright/test';

test('dropdown types', async({page})=>{

    await page.goto('https://playwrightautomation.com/practice.html?');

    const jobTitle = page.getByTestId('bootstrap-dropdown');
    const selectedValue = page.getByTestId('bootstrap-selected-value');
    const suggestDropdown = page.getByPlaceholder('Search for Products');
    const selectSkill = page.getByTestId('searchable-dropdown-input');
    const selectedSkill = page.getByTestId('searchable-selected-value')



    //await jobTitle.selectOption('Business Analyst'); not because this is bootstrap dropdown
//Custom dropdown — not built using the HTML <select> element. 
// It is a div / ul / li structure, so selectOption() cannot touch it.

    await jobTitle.click();
    await page.getByText('Business Analyst').click();
    await expect(selectedValue).toHaveText('Business Analyst');

    await suggestDropdown.pressSequentially('sm', {delay:100});
    await page.getByRole('listbox').getByText('Smart Watch',{exact:true}).click();

    await selectSkill.pressSequentially('java');
    await page.getByText('Java', {exact:true}).click();
    await expect(selectedSkill).toHaveText('Java');






})