import { test } from '@playwright/test'
test("Nested Frame", async ({ page }) => {

    await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
    const frame2 = page.frameLocator("#frm2");
    await frame2.getByPlaceholder("Enter First Name").fill("Karthick");
    await frame2.getByPlaceholder("Enter Last Name").fill("GG");
    await frame2.locator('//input[@id="femalerb"]').check();
    await frame2.locator('//input[@id="englishchbx"]').check();
    await frame2.getByPlaceholder("Enter Email").fill("karthickguru1204@gmail.com");
    await frame2.getByPlaceholder("Enter Password").fill("Karthick@12");
    await page.waitForTimeout(3000);

    const frame3 = page.frameLocator("#frm3");
    const frame3_1 = await frame3.frameLocator("#frm2");
    await frame3_1.getByPlaceholder("Enter First Name").fill("guru");
    await frame3_1.getByPlaceholder("Enter Last Name").fill("karthick");
    await frame3_1.locator('//input[@id="femalerb"]').check();
    await frame3_1.locator('//input[@id="chinesechbx"]').check();
    await frame3_1.getByPlaceholder("Enter Email").fill("guru1204@gmail.com");
    await frame3_1.getByPlaceholder("Enter Password").fill("Karthickguru@12");
    await page.waitForTimeout(3000);
})