import { test } from '@playwright/test'

test('Action Task', async ({ page }) => {
    await page.goto("https://demoqa.com/buttons");

    await page.locator('//button[text()="Click Me"]').click();
    await page.locator('//button[text()="Right Click Me"]').click({button : 'right'});
    await page.locator('//button[text()="Double Click Me"]').dblclick();
    // await page.waitForTimeout(6000)


});