
// import { expect, test} from '@playwright/test';
// import { TIMEOUT } from 'node:dns';

// test("Validate Form Information functionality @smoke", async({page}) => {
//     await page.goto("file:///C:/Users/Preeti%20Gautam/PycharmProjects/PythonProject/Test1/automation-practice-master/app/index.html")
//     await expect.soft(page).toHaveTitle("Automation Practice - Home");
//     await expect(page).toHaveURL("file:///C:/Users/Preeti%20Gautam/PycharmProjects/PythonProject/Test1/automation-practice-master/app/index.html");
//     await page.getByText("Form Submission").click();
//     await expect(page).toHaveTitle("Form Submission Practice");
//     await page.getByLabel("Full Name *").fill("Preeti Gautam");
//     await page.getByLabel("Email Address *").fill("preetigautam3195@gmail.com");
//     await page.locator("[id='password']").fill("password2");
//     await page.getByLabel("Phone Number").fill("9351591383");
//     await page.getByLabel("Age").fill("30");
//     await page.getByLabel("Country").selectOption({value : "india"});

//     //await page.waitForTimeout(10000);

//     await page.getByLabel("Full Name *").click();
//     await page.keyboard.press("Control+A");
//     await page.waitForTimeout(2000);
//     await page.keyboard.press("Control+C");
//     await page.waitForTimeout(2000);
//     await page.locator("#bio").click();
//     await page.waitForTimeout(2000);
//     await page.keyboard.press("Control+V");
//     await page.waitForTimeout(2000);
//     await page.getByRole('button', { name: "Submit Form" }).hover();
//     await page.getByRole('button', { name: "Submit Form" }).click();
//     const message = page.locator("#successMessage");
//     await expect(page.locator("#successMessage")).toBeVisible();
//     await expect(page.locator("#successMessage")).toContainText("Form submitted succsessfully");
// });

    

import  { test, expect } from '@playwright/test';

test("validate form submission functionality", async({page}) => {
    await page.goto("file:///C:/Users/Preeti%20Gautam/PycharmProjects/PythonProject/Test1/automation-practice-master/app/index.html");
    await expect.soft(page).toHaveTitle("Automation Practice - Home");
    await expect(page).toHaveURL("file:///C:/Users/Preeti%20Gautam/PycharmProjects/PythonProject/Test1/automation-practice-master/app/index.html");
    await page.getByText("Form Submission").click();
    await page.getByLabel("Full Name *").fill("Preeti Gautam");
    await page.getByLabel("Email Address *").fill("preetigautam3195@gmail.com");
    await page.getByLabel("Password *").fill("password1");
    await page.getByLabel("Phone Number").fill("9351591383");
    await page.getByLabel("Age").fill("30");
    await page.getByLabel("Country").selectOption({value : "india"});

    await page.getByLabel("Full Name *").click();
    await page.keyboard.press("Control+A");
    await page.waitForTimeout(2000);
    await page.keyboard.press("Control+C");
    await page.waitForTimeout(2000);
    await page.getByLabel("Bio / About Me").hover();
    await page.getByLabel("Bio / About Me").click();
    await page.keyboard.press("Control+V");
    await page.waitForTimeout(2000);
    await page.getByRole("button",{name: "Submit Form"}).hover();
    await page.getByRole("button",{name: "Submit Form"}).click();
    
    const message = page.locator("#successMessage");
    await expect(page.locator("#successMessage")).toBeVisible();
    await expect(page.locator("#successMessage")).toContainText("Form submitted successfully")

})










