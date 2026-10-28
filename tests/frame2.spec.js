import { test } from '@playwright/test'

test('frames handling', async ({ page }) => {

    await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame");
    const frame3 = page.frameLocator('//iframe[@class=" lazyloaded"]');
    await frame3.getByText("JMeter Training").click();
    await frame3.getByText("LoadRunner Training").click();
    await page.getByRole('link', { name: "Drag And Drop" }).click();
    const frame4 = page.frameLocator('//iframe[@src="../../demoSite/practice/droppable/photo-manager.html"]');
    await frame4.locator('//img[@src="images/high_tatras3_min.jpg"]').hover();
    await page.mouse.down();
    await frame4.locator('//div[@id="trash"]').hover();
    await page.mouse.up();
    await page.waitForTimeout(2000);

})