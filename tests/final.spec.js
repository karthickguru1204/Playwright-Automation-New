
// import { test } from '@playwright/test';

// test('all products', async ({ page }) => {

//     await page.goto('https://www.myntra.com/boy-tshirts');

//     let products = page.locator('//li[@class="product-base"]');

//     let pricesLocator = page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]//span[@class="product-discountedPrice" or (not(@class) and text())]');

//     let productCount = await products.count();
//     let locatornew = await pricesLocator.count();

//     console.log('Product count:', productCount);
//     console.log('Prices count:', locatornew);

//     let priceTexts = await pricesLocator.allInnerTexts();

//     let prices = priceTexts.map(text =>
//         Number(text.replace(/[^\d]/g, ''))
//     );

//     let minimumPrice = Math.min(...prices);

//     console.log('Minimum price:', minimumPrice);

//     // Find the product name matching the minimum price
//     let productName = await page.locator(`//li[@class="product-base"]/descendant::span[(@class="product-discountedPrice" and normalize-space()="Rs. ${minimumPrice}")or (not(@class)and normalize-space()="Rs. ${minimumPrice}")]/ancestor::div[@class="product-price"]/preceding-sibling::h4[@class="product-product"]`).allInnerTexts();
//     console.log('Product name:', productName);

// });


import { test } from '@playwright/test';

// Function 1: Find the minimum price
function getMinimumPrice(priceTexts) {
    return Math.min(...priceTexts.map(price =>
        Number(price.replace(/[^\d]/g, ''))
    ));
}

// Function 2: Run the Playwright test
test('all products', async ({ page }) => {
    await page.goto('https://www.myntra.com/boy-tshirts');

    let products = page.locator('//li[@class="product-base"]');

    let pricesLocator = page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]//span[@class="product-discountedPrice" or (not(@class) and text())]');

    let productCount = await products.count();
    let priceTexts = await pricesLocator.allInnerTexts();

    console.log('Product count:', productCount);
    console.log('Prices count:', priceTexts.length);

    let minimumPrice = getMinimumPrice(priceTexts);

    console.log('Minimum price:', minimumPrice);

    let productName = await page.locator(`//li[@class="product-base"][.//div[@class="product-price"]//span[normalize-space()="Rs. ${minimumPrice}" or normalize-space()="Rs.${minimumPrice}"]]//h4[@class="product-product"]`).allInnerTexts();

    console.log('Product name:', productName);
});