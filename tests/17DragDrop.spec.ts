import {test, expect} from '@playwright/test';

    test.describe('date picker test', ()=>{

        test.beforeEach(async({page})=>{
            await page.goto('https://qaplayground.com/practice/drag-drop');
        });

        test ('drag drop ', async({page})=>{
            const src= page.getByTestId('dd-item');
            const target = page.getByTestId('dd-drop-zone');

            await src.dragTo(target);
        })

    })