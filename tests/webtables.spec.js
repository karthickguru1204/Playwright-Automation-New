import { test } from "@playwright/test"
test('Webtables', async ({ page }) => {

    await page.goto("https://demoqa.com/webtables");
    await page.locator('//button[@class="btn btn-primary"]').click();
    await page.getByPlaceholder("First Name").fill('karthick');
    await page.getByPlaceholder("Last Name").fill('GG');
    await page.getByPlaceholder("name@example.com").fill('karthick1234@example.com');
    await page.getByPlaceholder("Age").fill('28');
    await page.getByPlaceholder("Salary").fill('200000');
    await page.getByPlaceholder("Department").fill('Testing');
    await page.locator('//button[@id="submit"]').click();

    const rows = page.locator('table tbody tr');
    
    let elementStatus = false;
    for (let i = 0; i < await rows.count(); i++) {
        const text = await rows.nth(i).textContent();
        if (text.includes('karthick') && text.includes('GG')) {
            elementStatus = true;
            const data = rows.nth(i).locator('td');
            for (let j = 0; j < await data.count(); j++) {
                const value = await data.nth(j).innerText();
                console.log(value);
            }
        }
    }
    console.log("Employee found:", elementStatus);

});


//     const rows = page.locator('table tbody tr');

//     let elementStatus = false;

//     for (let i = 0; i < await rows.count(); i++) {

//         const text = await rows.nth(i).textContent();

//         if (text.includes('karthick') && text.includes('GG')) {

//             elementStatus = true;

//             const email = await rows.nth(i).locator('td').nth(3).textContent();

//             console.log("Email:", email);
//         }
//     }

//     console.log("Employee found:", elementStatus);

// });
// const rows = page.locator('table tbody tr');

// const lastRow = rows.last();

// const data = lastRow.locator('td');
// console.log("Total cell count:", await data.count());



// for (let i = 0; i < await data.count(); i++) {
//     const text = await data.nth(i).innerText();
//     console.log(text);
// }

// });