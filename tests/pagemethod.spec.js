import { test } from '@playwright/test'

test('intro', async ({ page }) => {
   await page.goto("https://www.flipkart.com/");
   await page.waitForTimeout(2000);
   await page.goto("https://www.agaram.in/");
   await page.waitForTimeout(2000);
   await page.goBack();
   await page.waitForTimeout(2000);
   await page.goBack();
   await page.waitForTimeout(2000);
   await page.goForward();
   const url = await page.url();
   console.log(url);
   const title = await page.title();
   console.log(title);


   await page.screenshot({
      path : 'screen.png',
      fullPage : true
   })



})