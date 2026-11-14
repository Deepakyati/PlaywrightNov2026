import {test, expect} from '@playwright/test'

test ("Show Hide Elements", async({page})=>{
    await page.goto('https://playwrightautomation.com/practice.html?');

    const HideElemet = page.getByTestId('btn-hide-element');
    const ShowElement = page.getByTestId('btn-show-element');

    const TargetState = page.getByTestId('showhide-state');
    const showhidelog = page.getByTestId('showhide-log');
    const Textbox = page.getByTestId('showhide-textbox');

    await expect(TargetState).toContainText('visible');

    await HideElemet.click();
    await expect(TargetState).toContainText('hidden');
    await expect(showhidelog).toHaveText('Hide Element clicked — the target is now hidden.');

    await ShowElement.click();
    await expect(TargetState).toContainText('visible');
    await expect(showhidelog).toHaveText('Show Element clicked — the target is now visible.');

    await expect(Textbox).toBeVisible();

    await HideElemet.click();
    await expect(Textbox).toBeHidden();

})