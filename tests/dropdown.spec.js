import { test } from '@playwright/test'

test('dropdown', async ({ page }) => {
    await page.goto("https://www.testautomationcentral.com/demo/dropdown.html");
    await page.locator('//button[@data-target="multi-select-dropdown"]').click();
    await page.selectOption('//select[@class="form-multiselect block w-full mt-1"]', ["Option 2", "Option 4", "Option 3"]);

    await page.getByRole('button', { name: "Styled Dropdown" }).click();
    await page.locator('//select[@class="form-select block w-full mt-1 border-blue-500 text-blue-500"]').selectOption("Styled Option 2");
    await page.getByRole('button', { name: "Grouped Dropdown" }).click();

    await page.locator(`//h3[contains(text(),'Grouped Dropdown')]/following-sibling::select[@class="form-select block w-full mt-1"]`).selectOption({ label: "Option 3" });

    await page.waitForTimeout(4000);







})