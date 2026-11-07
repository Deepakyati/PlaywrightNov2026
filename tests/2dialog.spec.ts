import {test, expect} from '@playwright/test';

test.describe('Javascript dialog',()=>{

    test.beforeEach(async ({page}) =>{
        page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    
    })

    test ('handle javascript alerts', async({page}) =>{
        page.once('dialog', async(dialog)=>{
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe('I am a JS Alert');
            await dialog.accept();
        });

        await page.getByRole('button',{name: 'Click for JS Alert'}).click();
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');

    })

    test('handle javascript confirm', async ({page})=>{
        page.once('dialog', async(dialog)=>{
            expect(dialog.type()).toBe('confirm');
            expect(dialog.message()).toBe('I am a JS Confirm');
            await dialog.dismiss();
        });
        await page.getByRole('button',{name:'Click for JS Confirm'}).click();
        await expect(page.locator('#result')).toHaveText('You clicked: Cancel');

    })

    test('handle javascript prompt', async({page})=>{
        const inputText = 'deepak yati'

        page.once('dialog', async(dialog)=>{
            expect(dialog.type()).toBe('prompt');
            expect(dialog.message()).toBe('I am a JS prompt');
            await dialog.accept(inputText);
        });
        await page.getByRole('button',{name:'Click for JS Prompt'}).click();
        await expect(page.locator('#result')).toHaveText('You entered: deepak yati');

    })


})