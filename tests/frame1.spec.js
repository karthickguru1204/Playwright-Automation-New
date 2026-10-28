import { test } from '@playwright/test'

test('frame 1', async ({ page }) => {

    await page.goto("https://www.tutorialspoint.com/selenium/practice/frames.php");
    const frame1 = page.frameLocator('//h2[text()="Iframe 2"] /preceding-sibling::iframe[@src="new-tab-sample.php"]');
    await frame1.locator('//a[@href="https://www.tutorialspoint.com"]').click();
    await page.waitForTimeout(2000);

    const frame2 = page.frameLocator('//h2[text()="Iframe 2"] /following-sibling::iframe[@src="new-tab-sample.php"]');
    await frame2.locator('//a[@href="https://www.tutorialspoint.com"]').click();
    await page.waitForTimeout(2000);

})