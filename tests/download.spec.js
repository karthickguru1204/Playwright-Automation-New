import { test } from '@playwright/test'

test('dowload task', async ({ page }) => {

    await page.goto("https://demoqa.com/upload-download");
    const [Downloadfile] = await Promise.all([page.waitForEvent('download'),
        page.getByRole('button', { name: "Download" }).click()]);


    // await Downloadfile.saveAs('C:/Users/Karthick GG/OneDrive/Documents/' +  Downloadfile.suggestedFilename());

    await Downloadfile.saveAs('C:/Users/Karthick GG/OneDrive/Documents/SAMDOWNLOAD.jpeg');




})