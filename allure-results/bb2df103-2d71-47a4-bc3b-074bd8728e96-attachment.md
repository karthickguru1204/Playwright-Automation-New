# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: windowshandling.spec.js >> Windows Handling
- Location: tests\windowshandling.spec.js:2:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.reliancedigital.in/", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - generic [ref=e7]:
      - generic [ref=e8]:
        - generic [ref=e9]:
          - link "navigate to Orders" [ref=e11] [cursor=pointer]:
            - /url: https://www.reliancedigital.in/c/order/tracking
            - text: Orders
          - link "navigate to Contact us" [ref=e13] [cursor=pointer]:
            - /url: https://www.reliancedigital.in/c/contact-us
            - text: Contact us
          - link "navigate to Resource Center" [ref=e15] [cursor=pointer]:
            - /url: https://www.reliancedigital.in/c/resource-center
            - text: Resource Center
          - link "navigate to Find a store" [ref=e17] [cursor=pointer]:
            - /url: https://www.reliancedigital.in/c/store-locator
            - text: Find a store
        - generic [ref=e21]:
          - link "reliance digital logo" [ref=e23] [cursor=pointer]:
            - /url: /
            - img "Reliance Digital" [ref=e25]
          - textbox "Search Products & Brands" [ref=e32]
          - generic [ref=e33]:
            - button "Set Pincode" [ref=e40]:
              - generic [ref=e41]: 400001 - Mumbai
              - generic [ref=e47] [cursor=pointer]
            - link "goto cart" [ref=e51] [cursor=pointer]:
              - /url: /cart/bag/
              - generic [ref=e54]: Cart
            - button "Wishlist" [ref=e56] [cursor=pointer]
            - generic [ref=e62] [cursor=pointer]:
              - button [ref=e63]:
                - img "Account Details" [ref=e64]
              - generic [ref=e66]: Login
      - generic [ref=e72]:
        - button "Scroll categories left" [ref=e73] [cursor=pointer]:
          - img "left arrow" [ref=e74]
        - generic [ref=e75]:
          - link "open Mobiles" [ref=e79] [cursor=pointer]:
            - /url: /sections/mobiles
            - img "navIcon" [ref=e82]
            - generic [ref=e83]: Mobiles
          - link "open Laptops" [ref=e87] [cursor=pointer]:
            - /url: /sections/laptops
            - img "navIcon" [ref=e90]
            - generic [ref=e91]: Laptops
          - link "open Tablets" [ref=e95] [cursor=pointer]:
            - /url: /sections/tablets
            - img "navIcon" [ref=e98]
            - generic [ref=e99]: Tablets
          - link "open Audio" [ref=e103] [cursor=pointer]:
            - /url: /sections/audio
            - img "navIcon" [ref=e106]
            - generic [ref=e107]: Audio
          - link "open Televisions" [ref=e111] [cursor=pointer]:
            - /url: /sections/televisions
            - img "navIcon" [ref=e114]
            - generic [ref=e115]: Televisions
          - link "open Small Appliances" [ref=e119] [cursor=pointer]:
            - /url: /sections/small-domestic-appliances
            - img "navIcon" [ref=e122]
            - generic [ref=e123]: Small Appliances
          - link "open Refrigerators" [ref=e127] [cursor=pointer]:
            - /url: /sections/refrigerators
            - img "navIcon" [ref=e130]
            - generic [ref=e131]: Refrigerators
          - link "open Air Conditioners" [ref=e135] [cursor=pointer]:
            - /url: /sections/air-conditioners
            - img "navIcon" [ref=e138]
            - generic [ref=e139]: Air Conditioners
          - link "open Smart Wearables" [ref=e143] [cursor=pointer]:
            - /url: /sections/smart-watches
            - img "navIcon" [ref=e146]
            - generic [ref=e147]: Smart Wearables
          - link "open Personal Care" [ref=e151] [cursor=pointer]:
            - /url: /sections/personal-care-appliances
            - img "navIcon" [ref=e154]
            - generic [ref=e155]: Personal Care
          - link "open Washing Machines" [ref=e159] [cursor=pointer]:
            - /url: /sections/washing-machines
            - img "navIcon" [ref=e162]
            - generic [ref=e163]: Washing Machines
          - link "open All Categories" [ref=e167] [cursor=pointer]:
            - /url: /c/all-categories
            - img "navIcon" [ref=e170]
            - generic [ref=e171]: All Categories
        - button "Scroll categories right" [ref=e175] [cursor=pointer]:
          - img "right arrow" [ref=e176]
    - generic [ref=e182]:
      - link [ref=e187] [cursor=pointer]:
        - /url: https://www.reliancedigital.in/sections/festival-of-electronics?internal_source=hp&internal_medium=animated-video&internal_campaign=foe-26
      - generic [ref=e196]:
        - generic [ref=e198]:
          - link "Go to Image" [ref=e200] [cursor=pointer]:
            - /url: https://www.reliancedigital.in/sections/iphone-17-series
            - img "Banner of Image" [ref=e203]
          - link "Go to Image" [ref=e205] [cursor=pointer]:
            - /url: https://www.reliancedigital.in/collection/iphone-air-never-before-deals/?is_available=true&internal_source=hp&internal_medium=hpmc&internal_campaign=iphone-air
            - img "Banner of Image" [ref=e208]
          - generic [ref=e209]:
            - link "Go to Image":
              - /url: https://www.reliancedigital.in/collection/oppo-k14x-5g/?internal_source=hp&internal_medium=hpmc&internal_campaign=oppo-k14x-5g&is_available=true
          - generic [ref=e210]:
            - link "Go to Image":
              - /url: https://www.reliancedigital.in/collection/dell-15-laptops/?is_available=true&internal_source=hp&internal_medium=hpmc&internal_campaign=dell-15-laptops
          - generic [ref=e211]:
            - link "Go to product":
              - /url: https://www.reliancedigital.in/collection/air-purifiers/?is_available=true&internal_source=hp&internal_medium=hpmc&internal_campaign=air-purifiers-offer
          - generic [ref=e212]:
            - link "Go to Image":
              - /url: https://www.reliancedigital.in/c/extended-warranty-resq-care-plan-rcp?utm_source=hp&utm_medium=banner&utm_campaign=resq-care-plan&utm_id=resq-2609
        - generic [ref=e213]:
          - button "banner 1" [ref=e214]
          - button "banner 2" [ref=e215]
          - button "banner 3" [ref=e216]
          - button "banner 4" [ref=e217]
          - button "banner 5" [ref=e218]
          - button "banner 6" [ref=e219]
        - generic:
          - generic:
            - generic [ref=e220] [cursor=pointer]
            - generic [ref=e222] [cursor=pointer]
      - generic [ref=e235]:
        - generic [ref=e237]:
          - link "Go to Image" [ref=e239] [cursor=pointer]:
            - /url: https://www.reliancedigital.in/page/pnb-bank-offer-tc-2608
            - img "Banner of Image" [ref=e242]
          - link "Go to Image" [ref=e244] [cursor=pointer]:
            - /url: https://www.reliancedigital.in/page/hdfc-deal-offer-tc-2610
            - img "Banner of Image" [ref=e247]
          - generic [ref=e248]:
            - link "Go to Image":
              - /url: https://www.reliancedigital.in/page/idfc-bank-offer-tc
          - generic [ref=e249]:
            - link "Go to Image":
              - /url: https://www.reliancedigital.in/page/idbi-bank-offer-tc-2602
          - generic [ref=e250]:
            - link "Go to Co-Branded":
              - /url: https://www.reliancedigital.in/c/form-builder?form-slug=sbi-reliance-voucher-notify&internal_source=hp&internal_medium=banner&internal_campaign=sbi-reliance-voucher
        - generic [ref=e251]:
          - button "banner 1" [ref=e252]
          - button "banner 2" [ref=e253]
          - button "banner 3" [ref=e254]
          - button "banner 4" [ref=e255]
          - button "banner 5" [ref=e256]
        - generic:
          - generic:
            - generic [ref=e257] [cursor=pointer]
            - generic [ref=e259] [cursor=pointer]
      - generic [ref=e265]:
        - generic "Best Offers on Electronics" [ref=e268]
        - generic [ref=e271]:
          - link "goto banner" [ref=e272] [cursor=pointer]:
            - /url: /collection/google-pixel-11/?internal_source=hp&internal_medium=special-deals&internal_campaign=pixel-11&is_available=true
            - img "banner" [ref=e273]
          - link "goto banner" [ref=e274] [cursor=pointer]:
            - /url: /product/iffalcon-1651-cm-65-inch-4k-uhd-tv-65u65-mr3lk6-10253133
            - img "banner" [ref=e275]
          - link "goto banner" [ref=e276] [cursor=pointer]:
            - /url: /product/jss-voltas-sac-15t-3s-inv-ver-regnt-mag-mmm29c-9982578
            - img "banner" [ref=e277]
          - link "goto banner" [ref=e278] [cursor=pointer]:
            - /url: /collection/realme-p4-5g-series/?is_available=true&internal_source=hp&internal_medium=special-deals&internal_campaign=realme-p4-lite
            - img "banner" [ref=e279]
          - link "goto banner" [ref=e280] [cursor=pointer]:
            - /url: /collection/tcl-new-launch-televisions/?is_available=true&internal_source=hp&internal_medium=special-deals&internal_campaign=tcl-tv
            - img "banner" [ref=e281]
          - link "goto banner" [ref=e282] [cursor=pointer]:
            - /url: /collection/ifb-single-door-refrigerators/?internal_source=hp&internal_medium=tile-banner&internal_campaign=ifb-single-door-refrigerator&is_available=true
            - img "banner" [ref=e283]
          - link "goto banner" [ref=e284] [cursor=pointer]:
            - /url: /product/oneplus-nord-buds-3-tws-earbuds-harmonic-gray-m151nb-8598215
            - img "banner" [ref=e285]
          - link "goto banner" [ref=e286] [cursor=pointer]:
            - /url: /collection/mixer-grinder-250822/?internal_source=kitchen-appliances-sale&internal_medium=special-deals&internal_campaign=mixers&is_available=true&page_no=1&page_size=12&page_type=number
            - img "banner" [ref=e287]
    - generic [ref=e297]:
      - generic [ref=e298]:
        - generic [ref=e299]:
          - generic [ref=e300]:
            - generic [ref=e301]: Product Categories
            - generic [ref=e302]:
              - link "goto Smartphones" [ref=e303] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/collection/mobiles/?internal_source=navigation
                - text: Smartphones
              - link "goto Laptops" [ref=e304] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/collection/laptops
                - text: Laptops
              - link "goto DSLR Cameras" [ref=e305] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/collection/dslr-cameras
                - text: DSLR Cameras
              - link "goto Televisions" [ref=e306] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/sections/televisions
                - text: Televisions
              - link "goto Air Conditioners" [ref=e307] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/collection/air-conditioners
                - text: Air Conditioners
              - link "goto Refrigerator":
                - /url: undefined
                - text: Refrigerator
              - link "goto Kitchen Appliances" [ref=e308] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/collection/kitchen-appliances
                - text: Kitchen Appliances
              - link "goto Accessories" [ref=e309] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/collection/accessories
                - text: Accessories
              - link "goto Personal Care & Grooming" [ref=e310] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/collection/personal-care-grooming
                - text: Personal Care & Grooming
          - generic [ref=e311]:
            - generic [ref=e312]: Site Info
            - generic [ref=e313]:
              - link "goto About Reliance Digital" [ref=e314] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/c/about-reliance-digital
                - text: About Reliance Digital
              - link "goto resQ Services" [ref=e315] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/c/resQ-services
                - text: resQ Services
              - link "goto Site Map" [ref=e316] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/c/all-categories
                - text: Site Map
              - link "goto Gift Cards" [ref=e317] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/c/gift-cards
                - text: Gift Cards
              - link "goto Corporate Enquiries" [ref=e318] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/c/corporate-enquires
                - text: Corporate Enquiries
              - link "goto Contact Us" [ref=e319] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/c/contact-us
                - text: Contact Us
          - generic [ref=e320]:
            - generic [ref=e321]: Resource Center
            - generic [ref=e322]:
              - link "goto Buying Guides" [ref=e323] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/c/resource-center/buying-guides
                - text: Buying Guides
              - link "goto Manuals" [ref=e324] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/c/resource-center/manuals
                - text: Manuals
              - link "goto How To's" [ref=e325] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/c/resource-center/how-tos
                - text: How To's
              - link "goto Compare Products" [ref=e326] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/c/resource-center/compare
                - text: Compare Products
              - link "goto Nearest Store" [ref=e327] [cursor=pointer]:
                - /url: https://www.reliancedigitalstores.in/
                - text: Nearest Store
          - generic [ref=e328]:
            - generic [ref=e329]: Policies
            - generic [ref=e330]:
              - link "goto Terms of Use" [ref=e331] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/c/terms-of-use
                - text: Terms of Use
              - link "goto FAQs" [ref=e332] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/c/faqs
                - text: FAQs
              - link "goto Cancellation and Returns Policy" [ref=e333] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/c/cancellation-and-return-policy
                - text: Cancellation and Returns Policy
              - link "goto Pricing & Payments Policy" [ref=e334] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/c/pricing-and-payments-policy
                - text: Pricing & Payments Policy
              - link "goto Privacy Policy" [ref=e335] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/c/privacy-policy
                - text: Privacy Policy
              - link "goto E-waste Recycling Policy" [ref=e336] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/c/e-waste-recycling-policy
                - text: E-waste Recycling Policy
              - link "goto EMI and Additional Cashback T&C" [ref=e337] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/c/emi-and-additional-cashback-terms-and-conditions
                - text: EMI and Additional Cashback T&C
              - link "goto RelianceOne Loyalty Program T&C" [ref=e338] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/c/relianceone-loyalty-program-terms-and-conditions
                - text: RelianceOne Loyalty Program T&C
              - link "goto Caution Notice" [ref=e339] [cursor=pointer]:
                - /url: https://www.reliancedigital.in/c/caution-notice
                - text: Caution Notice
        - generic [ref=e340]:
          - generic [ref=e341]:
            - img "footerBannerDataIcon" [ref=e343]
            - generic [ref=e344]:
              - generic [ref=e345]: Experience Reliance digital app on mobile
              - link [ref=e348] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=in.digital.reliance
                - img "Google Playstore" [ref=e349]
              - link [ref=e352] [cursor=pointer]:
                - /url: https://apps.apple.com/in/app/reliance-digital-shopping-app/id1513379107
                - img "Apple Appstore" [ref=e353]
          - generic [ref=e354]:
            - generic [ref=e355]: Follow us
            - generic [ref=e356]:
              - link [ref=e358] [cursor=pointer]:
                - /url: https://www.facebook.com/reliancedigital/
                - img "Facebook" [ref=e359]
              - link [ref=e361] [cursor=pointer]:
                - /url: https://twitter.com/reliancedigital
                - img "Twitter" [ref=e362]
              - link [ref=e364] [cursor=pointer]:
                - /url: https://www.youtube.com/reliancedigital
                - img "Youtube" [ref=e365]
        - generic [ref=e366]:
          - generic [ref=e367]: Disclaimer
          - generic [ref=e368]: Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.
      - generic [ref=e369]: Copyright © 2026 Reliance Digital. All rights reserved.
  - status
```

# Test source

```ts
  1  | import { test } from "@playwright/test"
  2  | test('Windows Handling', async ({ context }) => {
  3  | 
  4  |     await context.grantPermissions(['geolocation']);
  5  | 
  6  |     const page = await context.newPage();
> 7  |     await page.goto('https://www.reliancedigital.in/');
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  8  |     await page.locator('//a[@aria-label="open Tablets"]').click();
  9  |     await page.waitForTimeout(2000);
  10 |     await page.mouse.wheel(0, 2000);
  11 |     const [newtab] = await Promise.all([context.waitForEvent('page'), page.locator('//img[@srcset="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/asus/494832511/0/GjemjoFIaK-wjHZdKXTR-AsusPad-494832511-i-1.jpg 250w"]').click()]);
  12 |     await newtab.waitForLoadState();
  13 |     await newtab.locator(`//img[@alt="add to compare"]`).click();
  14 |     await newtab.waitForTimeout(2000);
  15 | 
  16 |     await page.bringToFront();
  17 | 
  18 |     await page.waitForTimeout(2000);
  19 |     await page.mouse.wheel(0, 2000);
  20 |     const [newtab2] = await Promise.all([context.waitForEvent('page'), page.locator('//img[@srcset="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:250/motorola/494832361/0/SxWBUJ6VTO-qdzGmo6gh-Moto-Pad-70Gr-494832361-i-1.jpg 250w"]').click()]);
  21 |     await newtab2.waitForLoadState();
  22 |     await newtab2.locator('//img[@alt="add to compare"]').click();
  23 |     await newtab2.waitForTimeout(2000);
  24 | 
  25 |     await newtab2.locator('//button[@aria-label="Go to product comparison page"]/child::span[@class="compare-text"]').click();
  26 |     await newtab2.waitForLoadState();
  27 |     await newtab2.waitForTimeout(2000);
  28 | })
```