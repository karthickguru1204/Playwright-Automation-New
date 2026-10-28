import { test } from "@playwright/test"
test('Windows Handling', async ({ context }) => {

    await context.grantPermissions(['geolocation']);

    const page = await context.newPage();
    await page.goto('https://www.reliancedigital.in/');
    await page.locator('//a[@aria-label="open Tablets"]').click();
    await page.waitForTimeout(2000);
    await page.mouse.wheel(0, 2000);
    const [newtab] = await Promise.all([context.waitForEvent('page'), page.locator('//img[@srcset="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/asus/494832511/0/GjemjoFIaK-wjHZdKXTR-AsusPad-494832511-i-1.jpg 250w"]').click()]);
    await newtab.waitForLoadState();
    await newtab.locator(`//img[@alt="add to compare"]`).click();
    await newtab.waitForTimeout(2000);

    await page.bringToFront();

    await page.waitForTimeout(2000);
    await page.mouse.wheel(0, 2000);
    const [newtab2] = await Promise.all([context.waitForEvent('page'), page.locator('//img[@srcset="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/motorola/494832361/0/SxWBUJ6VTO-qdzGmo6gh-Moto-Pad-70Gr-494832361-i-1.jpg 250w"]').click()]);
    await newtab2.waitForLoadState();
    await newtab2.locator('//img[@alt="add to compare"]').click();
    await newtab2.waitForTimeout(2000);

    await newtab2.locator('//button[@aria-label="Go to product comparison page"]/child::span[@class="compare-text"]').click();
    await newtab2.waitForLoadState();
    await newtab2.waitForTimeout(2000);
})