import{test} from '@playwright/test'

test('task1' , async ({page})=> {
    await page.goto("https://www.agaram.in/");
    await page.waitForTimeout(2000);
    await page.goto("https://www.flipkart.com/");
    await page.goBack();
    await page.waitForTimeout(3000);
    await page.reload();
    await page.goto("https://hirenexa.org/");
    await page.goBack();
    await page.goForward();
    await page.waitForTimeout(2000);
    const url = await page.url();
    console.log(url);
    const title = await page.title();
    console.log(title);

    await page.screenshot({
        path  : "task1.png",
        fullPage : true
    })

})