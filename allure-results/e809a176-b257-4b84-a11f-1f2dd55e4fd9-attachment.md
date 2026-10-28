# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: uploadtask.spec.js >> Multiple file upload with loader
- Location: tests\uploadtask.spec.js:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForSelector: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//h1[contains(., "All done!")]') to be visible

```

# Page snapshot

```yaml
- generic [active]:
  - generic:
    - generic [ref=e1]:
      - banner [ref=e2]:
        - generic [ref=e3]:
          - link [ref=e4] [cursor=pointer]:
            - /url: /
            - img "UploadNow" [ref=e5]
            - text: UploadNow
          - button [ref=e6] [cursor=pointer]
        - generic [ref=e9]:
          - link [ref=e10] [cursor=pointer]:
            - /url: /profile
          - link "Create account" [ref=e14] [cursor=pointer]:
            - /url: /register
          - link "Sign in" [ref=e15] [cursor=pointer]:
            - /url: /signin
          - button "Switch to night mode" [ref=e16] [cursor=pointer]
          - button "en" [ref=e21] [cursor=pointer]
      - generic [ref=e23]:
        - complementary [ref=e25]:
          - link "Upload" [ref=e27] [cursor=pointer]:
            - /url: /upload
          - navigation [ref=e29]:
            - button "anonymrkny9FEoZLOP" [ref=e31] [cursor=pointer]:
              - term [ref=e33]
            - list [ref=e37]:
              - listitem [ref=e38]:
                - link "My guest profile" [ref=e39] [cursor=pointer]:
                  - /url: /profile
              - listitem [ref=e45]:
                - link "My files" [ref=e46] [cursor=pointer]:
                  - /url: /files/%2F
                - button [ref=e52] [cursor=pointer]
              - listitem [ref=e55]:
                - link "My favorites 0" [ref=e56] [cursor=pointer]:
                  - /url: /favourites
                  - generic [ref=e60]:
                    - text: My favorites
                    - generic [ref=e61]: "0"
              - listitem [ref=e63]:
                - link "Trash" [ref=e64] [cursor=pointer]:
                  - /url: /register
            - list [ref=e70]:
              - listitem [ref=e71]:
                - link "Home" [ref=e72] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e78]:
                - link "Upload files" [ref=e79] [cursor=pointer]:
                  - /url: /upload
              - listitem [ref=e85]:
                - link "Sign in" [ref=e86] [cursor=pointer]:
                  - /url: /signin
              - listitem [ref=e92]:
                - link "Create account" [ref=e93] [cursor=pointer]:
                  - /url: /register
              - listitem [ref=e99]:
                - generic [ref=e100]:
                  - link "API":
                    - /url: /use-api
              - listitem [ref=e101]:
                - link "FAQ" [ref=e102] [cursor=pointer]:
                  - /url: /faq
              - listitem [ref=e108]:
                - link "Contact" [ref=e109] [cursor=pointer]:
                  - /url: /contact
          - generic [ref=e114]:
            - generic [ref=e115]:
              - button [ref=e116] [cursor=pointer]
              - generic [ref=e119]: 1.0.38
            - generic [ref=e120]:
              - generic [ref=e121]:
                - progressbar
              - generic [ref=e122]:
                - generic [ref=e123]: 0%
                - generic [ref=e124]: 0 B / 100 GB
        - generic [ref=e127]:
          - generic [ref=e131]:
            - generic [ref=e132]:
              - heading "Upload in progress... Cancel" [level=1] [ref=e133]:
                - generic [ref=e134]: Upload in progress...
                - button "Cancel" [ref=e136] [cursor=pointer]
              - generic [ref=e138]:
                - img [ref=e140]:
                  - generic [ref=e143]: 0%
                - generic [ref=e144]:
                  - generic [ref=e145]: Sending 2 files in progress, 80.5 KB in total
                  - generic [ref=e146]: 0/2 uploaded files
                  - generic [ref=e147]: "Upload speed: 0 B/s"
                  - generic [ref=e149]: "Estimated time remaining: --"
            - generic [ref=e157]:
              - generic [ref=e158]:
                - generic [ref=e159]:
                  - generic "sampleFile.jpeg" [ref=e160]
                  - generic [ref=e162]: 4.10 KB
                - generic [ref=e167]:
                  - progressbar
              - generic [ref=e168]:
                - generic [ref=e169]:
                  - generic "5.jpeg" [ref=e170]
                  - generic [ref=e172]: 76.4 KB
                - generic [ref=e177]:
                  - progressbar
          - contentinfo [ref=e178]:
            - navigation [ref=e179]:
              - list [ref=e180]:
                - listitem [ref=e181]:
                  - link "Terms" [ref=e182] [cursor=pointer]:
                    - /url: /terms
                - listitem [ref=e183]:
                  - link "Privacy" [ref=e184] [cursor=pointer]:
                    - /url: /privacy
                - listitem [ref=e185]:
                  - link "Cookies" [ref=e186] [cursor=pointer]:
                    - /url: "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
                - listitem [ref=e187]:
                  - link "Copyright/DMCA" [ref=e188] [cursor=pointer]:
                    - /url: /contact?category=ABUSE
                - listitem [ref=e189]:
                  - link "Contact" [ref=e190] [cursor=pointer]:
                    - /url: /contact
              - generic [ref=e191]: UploadNow.io © 2026
      - generic [ref=e194]:
        - generic [ref=e195] [cursor=pointer]: Upload completed!
        - generic [ref=e198]:
          - button [ref=e199] [cursor=pointer]
          - button [ref=e202] [cursor=pointer]
    - region "Notifications Alt+T"
  - alert [ref=e211]
```

# Test source

```ts
  1  | 
  2  | 
  3  | import { test } from "@playwright/test";
  4  | 
  5  | test("Multiple file upload with loader", async ({ page }) => {
  6  | 
  7  |     await page.goto("https://uploadnow.io/upload");
  8  | 
  9  |     await page.locator('//input[@type="file"]').setInputFiles([
  10 |         "C:/Users/Karthick GG/Downloads/sampleFile.jpeg",
  11 |         "C:/Users/Karthick GG/OneDrive/Documents/5.jpeg"
  12 |     ]);
  13 | 
  14 |     // Start the upload
  15 |     await page.getByRole("button", {
  16 |         name: "Validate and upload"
  17 |     }).click();
  18 | 
  19 |     // Wait until upload completes
> 20 |     await page.waitForSelector('//h1[contains(., "All done!")]', {
     |                ^ Error: page.waitForSelector: Test timeout of 30000ms exceeded.
  21 |         state: "visible",
  22 |         // timeout: 60000
  23 |     });
  24 | 
  25 |     console.log("Upload completed successfully");
  26 | });
  27 | 
  28 | 
```