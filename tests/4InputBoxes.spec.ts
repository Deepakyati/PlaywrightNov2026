import {test, expect} from '@playwright/test'

test.describe('Radio button & checkboxes', ()=>{
    test.beforeEach(async ({page}) =>{
        await page.goto('https://playwrightautomation.com/practice.html?');
    })

    test ('verify inout field and reset functionality', async ({page})=>{

        const nameinput = page.getByPlaceholder('Enter your name');
        const emailinput = page.getByPlaceholder('Enter your email');
        const addressinput = page.getByPlaceholder('Enter your address');

        const submitbutton = page.getByRole('button',{name:'Submit'});
        //const resetbutton = page.getByRole('button',{name:'Reset'});
        const resetbutton = page.getByTestId('btn-reset-text-inputs');
        const statusmessage = page.locator('#text-inputs-status');

        //verify all fields are empty
        await expect(nameinput).toHaveValue('');
        await expect(emailinput).toHaveValue('');
        await expect(addressinput).toHaveValue('');

        //enter values
        await nameinput.fill('Deepak');
        await emailinput.fill('abc@gmail.com');
        await addressinput.fill('ABCDEFGHIJKLMNOP');

        await submitbutton.click();

        expect(statusmessage).toHaveText('submitted');

        //fetch value from input fields
        const enteredName = await nameinput.inputValue();
        const enteredEmail = await emailinput.inputValue();
        const enteredAddress = await addressinput.inputValue();

        console.log(enteredName, enteredAddress, enteredEmail);

        //validate the fetched value
        expect(enteredName).toBe('Deepak');
        expect(enteredEmail).toBe('abc@gmail.com');
        expect(enteredAddress).toBe('ABCDEFGHIJKLMNOP');

        await resetbutton.click();
        await expect(nameinput).toHaveValue('');
        await expect(emailinput).toHaveValue('');
        await expect(addressinput).toHaveValue('');



    })

    test('verify validation message when email is empty', async ({page})=>{

        const nameinput = page.getByPlaceholder('Enter your name');
        const emailinput = page.getByPlaceholder('Enter your email');
        const addressinput = page.getByPlaceholder('Enter your address');
        const submitbutton = page.getByRole('button',{name:'Submit'});
        const errorMessage = page.getByTestId('error-email');

        await nameinput.fill('Deepak');
        //await emailinput.fill('abc@gmail.com');
        await addressinput.fill('ABCDEFGHIJKLMNOP');

        await submitbutton.click();

        await expect(errorMessage).toHaveText('Email is required.');
        
    })

    test ('verify radio button selection', async ({page})=>{

        const malebutton = page.getByTestId('radio-male');
        const femalebutton = page.getByTestId('radio-female');
        const nonbinarybutton = page.getByTestId('radio-nonbinary');

        //verigy all radio buttons are unchecked by default
        await malebutton.check();
        await expect(malebutton).toBeChecked();
        await expect(femalebutton).not.toBeChecked();
        await expect(nonbinarybutton).not.toBeChecked();   

        
    })

    test.only('verify select all checkboxes functionality', async ({page})=>{

        const selectall = page.getByTestId('checkbox-select-all');

        const days = [
            page.getByTestId('checkbox-sunday'),
            page.getByTestId('checkbox-monday'),
            page.getByTestId('checkbox-tuesday'),
            page.getByTestId('checkbox-wednesday'),
            page.getByTestId('checkbox-thursday'),
            page.getByTestId('checkbox-friday'),
            page.getByTestId('checkbox-saturday')
        ]

        //verify all checkboxes are uncheked by default

        await expect(selectall).not.toBeChecked();

        for (const day of days){
            await expect(day).not.toBeChecked();
        }

        //check select all and verify if all boxes are checked

        await selectall.check();
        await expect(selectall).toBeChecked();

        for (const day of days){
            await expect(day).toBeChecked();
        }

        //uncheck first checkbox

        await days[0].uncheck();
        //verify
        await expect(days[0]).not.toBeChecked();

        //verify allselect are in indeterminate state
        await expect(selectall).toHaveJSProperty('indeterminate',true);

        //verify remaining boxes are still checked
        for (const day of days.slice(1)){
            await expect(day).toBeChecked();

        }

        //uncheck all remaining individual checkboxes
        for(const day of days.slice(1)){
            await day.uncheck();
        }

        //verify all indiviudal are unchecked

        for (const day of days){
            await expect(day).not.toBeChecked();
        }


        
    })
})