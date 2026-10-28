import { test } from "@playwright/test"

test('locators', async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");
    await page.locator("#userName").fill("karthick");
    await page.locator("#userEmail").fill("ggkarthick@gmail.com");
    await page.locator("#currentAddress").fill("chennai");
    await page.locator("#permanentAddress").fill("MAS");
    await page.locator('button[class="btn btn-primary"]');
    await page.waitForTimeout(2000);
})

