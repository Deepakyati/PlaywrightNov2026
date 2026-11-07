import {test, expect} from '@playwright/test';

test.describe('Multiple tabs and windows', ()=>{
    test.beforeEach(async({page})=>{
        await page.goto('https://demoqa.com/browser-windows');
    });

    test('Multiple tabs', async({page})=>{

        const popupPromise = page.waitForEvent('popup');
        await page.getByRole('button',{name:'New Tab'}).click();
        const newTab = await popupPromise;
        await newTab.waitForLoadState();
        await expect(newTab).toHaveURL('https://demoqa.com/sample');

    })

    test('Multiple windows', async({page,context})=>{

        const newPagePromise = context.waitForEvent('page');
        await page.locator('#windowButton').click();
        const newWindow = await newPagePromise;
        await newWindow.waitForLoadState();
        await expect(newWindow).toHaveURL('https://demoqa.com/sample');



        
    })
})
