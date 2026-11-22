import {test, expect} from '@playwright/test';

    test.describe('ipframe' , ()=>{

        test.beforeEach(async({page})=>{
            await page.goto('https://qaplayground.com/practice/iframes');
        });

        test ('ifarme first', async({page})=>{

            const iframe = page.frameLocator('[data-testid="iframe-basic"]')
            const frame1= iframe.getByTestId('iframe-name-input');
            const submit = iframe.getByRole('button',{name:'Submit'});
            const result = page.getByTestId('result-s01');


            await frame1.fill('Deepak');
            await submit.click();
            await expect(result).toHaveText('Submitted: Deepak')


        })

    })