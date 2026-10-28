
import { test } from '@playwright/test';

test('Amazon iPhone 17 Pro maximum reviews', async ({ page }) => {

    await page.goto('https://www.amazon.in');

    // Search iPhone 17 Pro
    await page.locator('//input[@id="twotabsearchtextbox"]')
        .fill('iPhone 17 Pro');

    await page.locator('//input[@id="nav-search-submit-button"]').click();

    await page.waitForLoadState();
    // Locate review counts for iPhone 17 Pro, excluding Pro Max
    let reviewsLocator = page.locator('//div[@data-cy="title-recipe"]/descendant::h2[contains(@aria-label,"iPhone 17 Pro ") and not(contains(@aria-label,"Pro Max"))]/ancestor::div[@data-cy="title-recipe"]/following-sibling::div[@data-cy="reviews-block"]/child::div[@class="a-row a-size-small"]/child::span[@aria-hidden="true"]');
    let reviewTexts = await reviewsLocator.allInnerTexts();

    console.log('Review texts:', reviewTexts);

    // Convert review counts into numbers
    let reviews = reviewTexts.map(text =>
        Number(text)
    );

    // Find maximum reviews
    let maxReviews = Math.max(...reviews);

    console.log('Maximum reviews:', maxReviews);

    let addToCart = page.locator(`//div[@data-cy="title-recipe"]/descendant::h2[contains(@aria-label,"iPhone 17 Pro ") and not(contains(@aria-label,"Pro Max"))]/ancestor::div[@data-cy="title-recipe"]/following-sibling::div[@data-cy="reviews-block"]/child::div[@class="a-row a-size-small"]/child::span[@aria-hidden="true" and normalize-space()="${maxReviews}"]/ancestor::div[@role="listitem"]/descendant::input[@aria-label="Add to cart"]`).first();

    await addToCart.click();
});











