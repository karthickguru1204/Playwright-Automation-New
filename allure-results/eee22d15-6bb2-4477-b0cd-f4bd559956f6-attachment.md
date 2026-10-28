# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: nesframes.spec.js >> Nested Frame
- Location: tests\nesframes.spec.js:2:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.hyrtutorials.com/p/frames-practice.html", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - generic:
          - generic:
            - list:
              - listitem [ref=e6]:
                - link "" [ref=e7] [cursor=pointer]:
                  - /url: https://www.facebook.com/HYRTutorials/
              - listitem [ref=e8]:
                - link "" [ref=e9] [cursor=pointer]:
                  - /url: https://twitter.com/hyrtutorials
              - listitem [ref=e10]:
                - link "" [ref=e11] [cursor=pointer]:
                  - /url: https://github.com/YadaGiriReddy/
              - listitem [ref=e12]:
                - link "" [ref=e13] [cursor=pointer]:
                  - /url: https://www.instagram.com/hyrtutorials/
              - listitem [ref=e14]:
                - link "" [ref=e15] [cursor=pointer]:
                  - /url: https://www.linkedin.com/company/hyrtutorials/
              - listitem [ref=e16]:
                - link "" [ref=e17] [cursor=pointer]:
                  - /url: https://www.youtube.com/hyrtutorials
      - list [ref=e23]:
        - listitem [ref=e24]:
          - generic [ref=e25]: 
          - text: Oct 28, 2026
        - listitem [ref=e26]:
          - link "Home" [ref=e27] [cursor=pointer]:
            - /url: https://www.hyrtutorials.com
        - listitem [ref=e28]:
          - link "Contact" [ref=e29] [cursor=pointer]:
            - /url: https://www.hyrtutorials.com/p/contactus.html
    - generic [ref=e31]:
      - link [ref=e36] [cursor=pointer]:
        - /url: https://www.hyrtutorials.com/
        - img "HYR" [ref=e37]
      - insertion [ref=e42]:
        - generic [ref=e44]:
          - generic "These are topics related to the article that might interest you" [ref=e45]: Discover more
          - link "Inline frame tutorial" [ref=e46] [cursor=pointer]
          - link "Web automation tools" [ref=e50] [cursor=pointer]
          - link "Frames practice exercises" [ref=e54] [cursor=pointer]
          - link "Website testing methods" [ref=e58] [cursor=pointer]
          - link "Automation testing guide" [ref=e62] [cursor=pointer]
          - link "Test automation services" [ref=e66] [cursor=pointer]
    - generic [ref=e71]:
      - listitem [ref=e72]:
        - link " Home" [ref=e73] [cursor=pointer]:
          - /url: https://www.hyrtutorials.com/
          - generic [ref=e74]: 
          - text: Home
      - list [ref=e77]:
        - listitem [ref=e78]:
          - link "Tech News" [ref=e79] [cursor=pointer]:
            - /url: https://www.hyrtutorials.com/search/label/TechNews
        - listitem [ref=e80]:
          - link "Tutorials " [ref=e81] [cursor=pointer]:
            - /url: https://www.hyrtutorials.com/search/label/Tutorials
        - listitem [ref=e82]:
          - link "YouTube Courses " [ref=e83] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e84]:
          - link "Selenium Practice " [ref=e85] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e86]:
          - link "Contact" [ref=e87] [cursor=pointer]:
            - /url: https://www.hyrtutorials.com/p/contactus.html
    - generic [ref=e88]:
      - generic [ref=e95]:
        - heading "Frames Practice" [level=1] [ref=e98]
        - article [ref=e99]:
          - generic [ref=e100]:
            - generic [ref=e101]: "This page is used for practicing iframes in web automation. We have three types of frames in web applications, those are:"
            - list [ref=e103]:
              - listitem [ref=e104]:
                - text: frame - The
                - generic [ref=e105]: <frame>
                - text: tag was used in HTML 4 to define one particular window (frame) within a
                - generic [ref=e106]: <frameset>
                - text: .
              - listitem [ref=e107]:
                - text: frameset - The
                - generic [ref=e108]: <frameset>
                - text: tag was used in HTML 4 to define a frameset.
              - listitem [ref=e109]:
                - text: iframe - The
                - generic [ref=e110]: <iframe>
                - text: tag specifies an inline frame. An inline frame is used to embed another document within the current HTML document.
            - generic [ref=e111]: Out of these, frame and frameset were no longer being supported in HTML 5. Below we have three frames to practice.
            - generic [ref=e112]:
              - generic [ref=e113]:
                - paragraph [ref=e114]
                - paragraph [ref=e115]:
                  - text: This textbox is used for entering the text after switching back from frames.
                  - link "Frames practice exercises" [ref=e116] [cursor=pointer]
                - textbox [ref=e120]
              - generic [ref=e121]:
                - heading "Frame1:" [level=3] [ref=e122]
                - iframe [ref=e123]: <p>Your browser does not support iframes.</p>
              - generic [ref=e124]:
                - heading "Frame2:" [level=3] [ref=e125]
                - iframe [ref=e126]: <p>Your browser does not support iframes.</p>
              - generic [ref=e127]:
                - heading "Frame3:" [level=3] [ref=e128]
                - iframe [ref=e129]: <p>Your browser does not support iframes.</p>
      - generic [ref=e132]:
        - generic [ref=e133]:
          - generic [ref=e134]:
            - heading "Support My Work" [level=2] [ref=e136]
            - link "Buy me a coffee" [ref=e139] [cursor=pointer]:
              - /url: https://buymeacoffee.com/yadagirireddy
          - generic [ref=e155]:
            - heading "Subscribe to YouTube channels" [level=2] [ref=e157]
            - generic [ref=e158]:
              - iframe [ref=e160]:
                - generic [ref=f15e2]:
                  - link:
                    - /url: /channel/UCzFPWBdClpZ9afmmyhho4Rg
                    - generic [ref=f15e3] [cursor=pointer]
                  - link "H Y R Tutorials" [ref=f15e7] [cursor=pointer]:
                    - /url: /channel/UCzFPWBdClpZ9afmmyhho4Rg
                  - generic [ref=f15e8]:
                    - button "YouTube" [ref=f15e9] [cursor=pointer]:
                      - generic "YouTube" [ref=f15e11]
                    - button "74K" [ref=f15e12]
              - iframe [ref=e162]:
                - generic [ref=f16e2]:
                  - link:
                    - /url: /channel/UC1Bbtdbpfert8leeKx2mssw
                    - generic [ref=f16e3] [cursor=pointer]
                  - link "H Y R Tutorials - Telugu" [ref=f16e7] [cursor=pointer]:
                    - /url: /channel/UC1Bbtdbpfert8leeKx2mssw
                  - generic [ref=f16e8]:
                    - button "YouTube" [ref=f16e9] [cursor=pointer]:
                      - generic "YouTube" [ref=f16e11]
                    - button "157K" [ref=f16e12]
          - generic [ref=e163]:
            - heading "Telegram" [level=2] [ref=e165]
            - link "Join Telegram Channel" [ref=e167] [cursor=pointer]:
              - /url: https://xn--r1a.click/hyrtutorials
          - heading "Facebook" [level=2] [ref=e173]
          - generic [ref=e174]:
            - heading "Twitter" [level=2] [ref=e176]
            - iframe [ref=e178]:
              - link "Follow @hyrtutorials" [ref=f74e4] [cursor=pointer]:
                - /url: https://x.com/intent/follow?original_referer=https%3A%2F%2Fwww.hyrtutorials.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Ehyrtutorials&region=follow_link&screen_name=hyrtutorials
          - insertion [ref=e180]:
            - generic [ref=e183]:
              - heading "These are topics related to the article that might interest you" [level=2] [ref=e185]: Discover more
              - link "HTML tutorial" [ref=e186] [cursor=pointer]
              - link "Learn to Code" [ref=e191] [cursor=pointer]
              - link "HTML document embedding" [ref=e196] [cursor=pointer]
        - generic [ref=e201]:
          - list [ref=e202]:
            - listitem [ref=e203]:
              - link "Popular" [ref=e204] [cursor=pointer]:
                - /url: "#tabside1"
            - listitem [ref=e205]:
              - link "Recent" [ref=e206] [cursor=pointer]:
                - /url: "#tabside2"
            - listitem [ref=e207]:
              - link "Comments" [ref=e208] [cursor=pointer]:
                - /url: "#tabside3"
          - list [ref=e212]:
            - listitem [ref=e213]:
              - generic [ref=e214]:
                - link [ref=e216] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/arrays-in-java.html
                  - img "Arrays%20(Single-dimensional)%20in%20Java" [ref=e217]
                - link "Arrays in Java" [ref=e219] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/arrays-in-java.html
            - listitem [ref=e220]:
              - generic [ref=e221]:
                - link [ref=e223] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/print-the-English-Alphabet-in-Upper-case-and-Lower-case.html
                  - img "31" [ref=e224]
                - link "Write a java program to print the English Alphabet in Upper case and Lower case" [ref=e226] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/print-the-English-Alphabet-in-Upper-case-and-Lower-case.html
            - listitem [ref=e227]:
              - generic [ref=e228]:
                - link [ref=e230] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2019/09/maven-uninstallation-on-microsoft.html
                  - img "Apache+maven" [ref=e231]
                - link "Maven uninstallation on Microsoft Windows" [ref=e233] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2019/09/maven-uninstallation-on-microsoft.html
            - listitem [ref=e234]:
              - generic [ref=e235]:
                - link [ref=e237] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/factors-of-a-given-number.html
                  - img "30" [ref=e238]
                - link "Write a java program to print the factors of a given number" [ref=e240] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/factors-of-a-given-number.html
            - listitem [ref=e241]:
              - generic [ref=e242]:
                - link [ref=e244] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2019/09/how-to-install-cucumber-eclipse-plugin.html
                  - img "Cucumber+Eclipse+pluggin" [ref=e245]
                - link "How to install Cucumber Eclipse Plugin" [ref=e247] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2019/09/how-to-install-cucumber-eclipse-plugin.html
          - generic:
            - insertion:
              - iframe [ref=e249]
          - text:     
        - generic [ref=e250]:
          - generic [ref=e251]:
            - heading "Archive" [level=2] [ref=e253]
            - combobox [ref=e257]:
              - option "Archive" [selected]
              - option "April (4)"
              - option "March (10)"
              - option "February (10)"
              - option "January (13)"
              - option "December (5)"
              - option "October (5)"
              - option "September (2)"
              - option "June (21)"
              - option "May (10)"
              - option "April (1)"
              - option "March (25)"
              - option "February (3)"
              - option "January (1)"
              - option "July (6)"
              - option "June (10)"
              - option "May (5)"
              - option "April (7)"
              - option "March (2)"
              - option "December (1)"
              - option "November (3)"
              - option "October (8)"
              - option "September (4)"
              - option "August (2)"
              - option "July (2)"
              - option "May (7)"
              - option "April (4)"
              - option "March (2)"
              - option "January (1)"
              - option "November (1)"
              - option "October (4)"
              - option "September (5)"
              - option "July (13)"
              - option "June (13)"
              - option "April (8)"
              - option "March (10)"
              - option "February (16)"
              - option "January (1)"
              - option "September (1)"
              - option "August (5)"
          - generic [ref=e258]:
            - heading "Tags" [level=2] [ref=e260]
            - generic [ref=e261]:
              - link ".NET" [ref=e263] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/.NET?&max-results=6
              - link "Apache POI" [ref=e265] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Apache%20POI?&max-results=6
              - link "AutomationTesting" [ref=e267] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/AutomationTesting?&max-results=6
              - link "Eclipse" [ref=e269] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Eclipse?&max-results=6
              - link "Java" [ref=e271] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Java?&max-results=6
              - link "Maven" [ref=e273] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Maven?&max-results=6
              - link "Selenium" [ref=e275] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Selenium?&max-results=6
              - link "Shorts" [ref=e277] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Shorts?&max-results=6
              - link "SQL" [ref=e279] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/SQL?&max-results=6
              - link "TechNews" [ref=e281] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/TechNews?&max-results=6
              - link "Testing" [ref=e283] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Testing?&max-results=6
              - link "TestNG" [ref=e285] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/TestNG?&max-results=6
              - link "Tutorials" [ref=e287] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Tutorials?&max-results=6
              - link "Web Automation" [ref=e289] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Web%20Automation?&max-results=6
              - link "Windows Automation" [ref=e291] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Windows%20Automation?&max-results=6
            - insertion [ref=e293]:
              - generic [ref=e296]:
                - heading "These are topics related to the article that might interest you" [level=2] [ref=e298]: Discover more
                - link "Build a Website" [ref=e299] [cursor=pointer]
                - link "Java programming courses" [ref=e304] [cursor=pointer]
                - link "Java" [ref=e309] [cursor=pointer]
    - insertion [ref=e315]
    - generic [ref=e318]:
      - generic [ref=e321]:
        - heading "Recent Tutorials" [level=2] [ref=e323]
        - generic [ref=e325]:
          - generic [ref=e326]:
            - link [ref=e327] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/2023/04/arrays-in-java.html
            - generic [ref=e329]:
              - heading [level=3] [ref=e330]:
                - link "Arrays in Java" [ref=e331] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/arrays-in-java.html
              - text: Yada Giri ReddyApr 16, 2023
          - generic [ref=e332]:
            - link [ref=e333] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/2023/04/print-the-English-Alphabet-in-Upper-case-and-Lower-case.html
            - generic [ref=e335]:
              - heading [level=3] [ref=e336]:
                - link "Write a java program to print the English Alphabet in Upper case and Lower case" [ref=e337] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/print-the-English-Alphabet-in-Upper-case-and-Lower-case.html
              - text: Yada Giri ReddyApr 08, 2023
          - generic [ref=e338]:
            - link [ref=e339] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/2023/04/factors-of-a-given-number.html
            - generic [ref=e341]:
              - heading [level=3] [ref=e342]:
                - link "Write a java program to print the factors of a given number" [ref=e343] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/factors-of-a-given-number.html
              - text: Yada Giri ReddyApr 05, 2023
          - generic [ref=e344]:
            - link [ref=e345] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/2023/04/factorial-of-a-given number.html
            - generic [ref=e347]:
              - heading [level=3] [ref=e348]:
                - link "Write a java program to print the factorial of a given number" [ref=e349] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/factorial-of-a-given number.html
              - text: Yada Giri ReddyApr 02, 2023
          - generic [ref=e350]:
            - link [ref=e351] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/2023/03/sumof-the-even-numbers-ranging-from-8-to-250-using-for-loop.html
            - generic [ref=e353]:
              - heading [level=3] [ref=e354]:
                - link "Write a java program to print the sum of the even numbers ranging from 8 to 250 using for loop" [ref=e355] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/03/sumof-the-even-numbers-ranging-from-8-to-250-using-for-loop.html
              - text: Yada Giri ReddyMar 30, 2023
      - generic [ref=e357]:
        - generic [ref=e358]:
          - heading "Total Pageviews" [level=2] [ref=e360]
          - generic [ref=e363]:
            - strong [ref=e365]: "1"
            - strong [ref=e368]: "5"
            - strong [ref=e371]: "5"
            - strong [ref=e374]: "0"
            - strong [ref=e377]: "2"
            - strong [ref=e380]: "0"
            - strong [ref=e383]: "6"
            - strong [ref=e386]: "4"
        - generic [ref=e388]:
          - heading [level=2] [ref=e390]
          - list [ref=e392]:
            - listitem [ref=e393]:
              - link "How I Get Free Traffic from ChatGPT in 2025 (AIO vs SEO)" [ref=e395] [cursor=pointer]:
                - /url: https://techncruncher.blogspot.com/2025/12/how-i-get-free-traffic-from-chatgpt-in.html
              - text: "- 12/4/2025"
            - listitem [ref=e396]:
              - 'link "What is Blockchain: Everything You Need to Know (2025)" [ref=e398] [cursor=pointer]':
                - /url: https://techncruncher.blogspot.com/2025/11/what-is-blockchain-everything-you-need.html
              - text: "- 11/24/2025"
            - listitem [ref=e399]:
              - link "Top 10 AI Tools That Will Transform Your Content Creation in 2025" [ref=e401] [cursor=pointer]:
                - /url: https://techncruncher.blogspot.com/2025/01/top-10-ai-tools-that-will-transform.html
              - text: "- 1/2/2025"
            - listitem [ref=e402]:
              - 'link "LimeWire AI Studio Review 2023: Details, Pricing & Features" [ref=e404] [cursor=pointer]':
                - /url: https://techncruncher.blogspot.com/2023/12/limewire-ai-studio-review-2023-details.html
              - text: "- 12/12/2023"
            - listitem [ref=e405]:
              - link "Top 10 AI Tools in 2023 That Will Make Your Life Easier" [ref=e407] [cursor=pointer]:
                - /url: https://techncruncher.blogspot.com/2023/01/top-10-ai-tools-in-2023-that-will-make.html
              - text: "- 1/26/2023"
      - generic [ref=e409]:
        - generic [ref=e410]:
          - heading "Connect With us" [level=2] [ref=e412]
          - list [ref=e414]:
            - listitem [ref=e415]:
              - link "" [ref=e416] [cursor=pointer]:
                - /url: https://facebook.com/HYRTutorials
            - listitem [ref=e418]:
              - link "" [ref=e419] [cursor=pointer]:
                - /url: https://github.com/YadaGiriReddy/HYR-Tutorials
            - listitem [ref=e421]:
              - link "" [ref=e422] [cursor=pointer]:
                - /url: https://www.instagram.com/hyrtutorials
            - listitem [ref=e424]:
              - link "" [ref=e425] [cursor=pointer]:
                - /url: https://linkedin.com/company/hyrtutorials
            - listitem [ref=e427]:
              - link "" [ref=e428] [cursor=pointer]:
                - /url: https://t.me/hyrtutorials
            - listitem [ref=e430]:
              - link "" [ref=e431] [cursor=pointer]:
                - /url: https://youtube.com/hyrtutorials
        - generic [ref=e433]:
          - heading "Categories" [level=2] [ref=e435]
          - generic [ref=e436]:
            - link "Tutorials" [ref=e438] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Tutorials?&max-results=6
            - link "Java" [ref=e440] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Java?&max-results=6
            - link "Testing" [ref=e442] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Testing?&max-results=6
            - link "AutomationTesting" [ref=e444] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/AutomationTesting?&max-results=6
            - link "Web Automation" [ref=e446] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Web%20Automation?&max-results=6
            - link "TechNews" [ref=e448] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/TechNews?&max-results=6
            - link "Selenium" [ref=e450] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Selenium?&max-results=6
            - link "Shorts" [ref=e452] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Shorts?&max-results=6
            - link "TestNG" [ref=e454] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/TestNG?&max-results=6
            - link "SQL" [ref=e456] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/SQL?&max-results=6
            - link "Eclipse" [ref=e458] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Eclipse?&max-results=6
            - link "Maven" [ref=e460] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Maven?&max-results=6
            - link "Apache POI" [ref=e462] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Apache%20POI?&max-results=6
            - link ".NET" [ref=e464] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/.NET?&max-results=6
            - link "Windows Automation" [ref=e466] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Windows%20Automation?&max-results=6
    - insertion [ref=e468]
    - generic [ref=e471]:
      - generic [ref=e472]:
        - text: Copyrights @ H Y R Tutorials - Designed by
        - link "Yada Giri Reddy" [ref=e473] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/hyadagirireddy/
      - generic [ref=e474]:
        - text: Crafted with  by
        - link "TemplatesYard" [ref=e475] [cursor=pointer]:
          - /url: http://www.templatesyard.com/
        - text: "| Distributed by"
        - link "Blogger Themes" [ref=e476] [cursor=pointer]:
          - /url: http://www.mybloggerthemes.com/
    - text: 
  - iframe [aria-hidden] [ref=e477]
```

# Test source

```ts
  1  | import { test } from '@playwright/test'
  2  | test("Nested Frame", async ({ page }) => {
  3  | 
> 4  |     await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  5  |     const frame2 = page.frameLocator("#frm2");
  6  |     await frame2.getByPlaceholder("Enter First Name").fill("Karthick");
  7  |     await frame2.getByPlaceholder("Enter Last Name").fill("GG");
  8  |     await frame2.locator('//input[@id="femalerb"]').check();
  9  |     await frame2.locator('//input[@id="englishchbx"]').check();
  10 |     await frame2.getByPlaceholder("Enter Email").fill("karthickguru1204@gmail.com");
  11 |     await frame2.getByPlaceholder("Enter Password").fill("Karthick@12");
  12 |     await page.waitForTimeout(3000);
  13 | 
  14 |     const frame3 = page.frameLocator("#frm3");
  15 |     const frame3_1 = await frame3.frameLocator("#frm2");
  16 |     await frame3_1.getByPlaceholder("Enter First Name").fill("guru");
  17 |     await frame3_1.getByPlaceholder("Enter Last Name").fill("karthick");
  18 |     await frame3_1.locator('//input[@id="femalerb"]').check();
  19 |     await frame3_1.locator('//input[@id="chinesechbx"]').check();
  20 |     await frame3_1.getByPlaceholder("Enter Email").fill("guru1204@gmail.com");
  21 |     await frame3_1.getByPlaceholder("Enter Password").fill("Karthickguru@12");
  22 |     await page.waitForTimeout(3000);
  23 | })
```