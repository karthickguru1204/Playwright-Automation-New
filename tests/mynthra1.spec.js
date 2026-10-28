
import { test } from '@playwright/test';

test('Myntra minimum price', async ({ page }) => {

    await page.goto('https://www.myntra.com/boy-tshirts');

    let products = page.locator('//li[@class="product-base"]');


    let pricesLocator = page.locator('//div[@class="product-price"]/descendant::span[@class="product-discountedPrice"]');

    let productCount = await products.count();
    let priceCount = await pricesLocator.count();

    console.log('Total products:', productCount);
    console.log('Total prices:', priceCount);

    let priceTexts = await pricesLocator.allInnerTexts();

    let prices = priceTexts.map(text =>
        Number(text.replace(/[^\d]/g, ''))
    );

    let minimumPrice = Math.min(...prices);
    console.log('Minimum price:', minimumPrice);

    // let productElement = page.locator(`//span[@class="product-discountedPrice"and normalize-space()="Rs. ${minimumPrice}"`);

    // let productName = await productElement.locator('xpath=ancestor::li[@class="product-base"]//h4[@class="product-product"]').allInnerTexts();
    // console.log("Product name:", productName);

    let productName = await page.locator(`//li[@class="product-base"]/descendant::span[@class="product-discountedPrice" and normalize-space()="Rs. ${minimumPrice}"]/ancestor::div[@class="product-price"]/preceding-sibling::h4[@class="product-product"]`).allInnerTexts();

    console.log("Product name:", productName);


});

// test('all products', async ({ page }) => {

//     await page.goto('https://www.myntra.com/boy-tshirts');

//     let products = page.locator('//li[@class="product-base"]');

//     let pricesLocator = page.locator(`//div[@class="product-price"]/descendant::span[@class="product-discountedPrice" and contains(text(),"Rs.")]"]`).first();

//     let productCount = await products.count();
//     let priceCount = await pricesLocator.count();


//     console.log('Total prices:', priceCount);
//     console.log('Total prices:', pricesLocator);










// })






















