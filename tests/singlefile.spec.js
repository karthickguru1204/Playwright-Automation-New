import { test } from '@playwright/test'


test('single file upload', async ({ page }) => {

    await page.goto("https://demoqa.com/upload-download");
    await page.locator('//input[@type="file"]').setInputFiles("C:/Users/Karthick GG/Downloads/sampleFile.jpeg");
    await page.waitForTimeout(2000);

    console.log("Upload completed successfully");



})