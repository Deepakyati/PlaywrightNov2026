import {test, expect} from '@playwright/test';

    test.describe('date picker test', ()=>{

        test.beforeEach(async({page})=>{
            await page.goto('https://qaplayground.com/practice/date-picker');
        });

        test('Date picker', async({page})=>{
            
            const  dataInput= page.getByTestId('dp-basic-input');

            await dataInput.fill('2026-12-25');

            await expect(dataInput).toHaveValue('2026-12-25');
            await page.pause();

        })

        test ('secenario 2', async({page})=>{
            const calendertrigger = page.getByTestId('dp-calendar-panel');
            await expect(calendertrigger).toBeVisible();
            await calendertrigger.focus();
            await calendertrigger.click();

            const monthHeading = page.getByTestId('dp-calendar-month-heading');
            await expect(monthHeading).toBeVisible();


            

        })

    })