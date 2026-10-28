
import { test } from "@playwright/test";

test('Edit Webtable', async ({ page }) => {

    await page.goto("https://demoqa.com/webtables");

    const rows = page.locator('table tbody tr');

    // Select the 2nd row
    const row = rows.nth(1);netnn

    // Click Edit button in the 2nd row
    await row.locator('span[title="Edit"]').click();


    // Update Salary
    await page.getByPlaceholder("Salary").fill('300000');
    await page.waitForTimeout(2000);

    // Submit updated record
    await page.locator('//button[@id="submit"]').click();

    // Get the updated 2nd row
    const updatedRow = page.locator('table tbody tr').nth(1);

    const data = updatedRow.locator('td');

    // Print all cell values
    for (let i = 0; i < await data.count(); i++) {
        console.log(await data.nth(i).innerText());
    }
});
