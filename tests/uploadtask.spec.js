

import { test } from "@playwright/test";

test("Multiple file upload with loader", async ({ page }) => {

    await page.goto("https://uploadnow.io/upload");

    await page.locator('//input[@type="file"]').setInputFiles([
        "C:/Users/Karthick GG/Downloads/sampleFile.jpeg",
        "C:/Users/Karthick GG/OneDrive/Documents/5.jpeg"
    ]);

    // Start the upload
    await page.getByRole("button", {
        name: "Validate and upload"
    }).click();

    // Wait until upload completes
    await page.waitForSelector('//h1[contains(., "All done!")]', {
        state: "visible",
        // timeout: 60000
    });

    console.log("Upload completed successfully");
});

