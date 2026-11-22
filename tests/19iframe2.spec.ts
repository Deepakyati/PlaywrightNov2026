import {test, expect} from '@playwright/test';

    test.describe('iframe 2' , ()=>{

        test.beforeEach(async({page})=>{
            await page.goto('https://qaplayground.com/practice/iframes');
        });

        test ('ifarme second', async({page})=>{

            const iframe = page.frameLocator('[data-testid="iframe-form"]')
            await iframe.getByTestId('iframe-lang-select').selectOption('JavaScript');
            await iframe.getByTestId('iframe-agree-chk').check();
            await iframe.getByRole('button',{name:'Save Preferences'}).click();

            await expect(page.getByTestId('result-s02')).toHaveText('Saved: javascript | agreed ✓');
            //await page.pause();
            


        })

    })