
import {chromium, expect, test} from '@playwright/test';
import { buttonpage } from '../pageproject/button.js';


let page1;

test.beforeAll("", async({}) => {

    let browser = await chromium.launch({headless: false});
    let context1 = await browser.newContext();
    page1 = await context1.newPage();
    await page1.goto("file:///C:/Users/Preeti%20Gautam/PycharmProjects/PythonProject/Test1/automation-practice-master/app/index.html");
    await page1.getByText("Button Interactions").click();
})

test.beforeEach("" , async() => {

})

test.only("validate basic button functionality @smoke", async() => {
    const button = new buttonpage(page1);
    button.clickOnPrimaryButton();
    await page1.waitForTimeout(1000);
    await button.showAndHideTextValidation("Primary button clicked!");
    await button.clickOnSecondaryButton();
    await button.showAndHideSecondaryTextValidation("Secondary button clicked!")

   });

   //  await page1.getByRole("button",{name : "Secondary Button"}).hover();     // Secondary Button
   //  await page1.getByRole("button",{name : "Secondary Button"}).click();
   //  await expect(page1.locator("[id='basicMessage']")).toBeVisible();
   //  const msg01 = await page.locator("[id='basicMessage']").textContent();
   //  expect(msg01).toBe("Secondary button clicked!")
   //  await expect(page1.locator("[id='basicMessage']")).toBeHidden({timeout : 5000})

   //   await page1.getByRole("button",{name : "Success Button"}).hover();     // Success Button
   //   await page1.getByRole("button",{name : "Success Button"}).click();
   //   await expect(page1.locator("[id='basicMessage']")).toBeVisible();
   //   const msg02 = await page1.locator("[id='basicMessage']").textContent();
   //   expect(msg02).toBe("Success button clicked!");
   //   await expect(page1.locator("[id='basicMessage']")).toBeHidden({timeout : 5000});

   //   await page1.getByRole("button",{name : "Danger Button"}).hover();     // Danger Button
   //   await page1.getByRole("button",{name : "Danger Button"}).click();
   //   await expect(page1.locator("[id='basicMessage']")).toBeVisible();
   //   const msg03 = await page1.locator("[id='basicMessage']").textContent();
   //   expect(msg03).toBe("Danger button clicked!");
   //   await expect(page1.locator("[id='basicMessage']")).toBeHidden({timeout : 5000});




test("validate Click Count Button functionality", async() => {
    const clickBtn = page1.locator("#counterBtn");
    const clickCount = page1.locator("#clickCount");
    await expect(clickBtn).toBeVisible();
    await expect(clickCount).toBeVisible({timeout: 5000});
    await page1.getByRole("button", { name: "Click Me!" }).nth(0).click({button: "right",clickCount: 15});
});   

test("validate Disabled Button functionality", async() => {

   await expect(page1.getByRole("button",{name: "Disabled Button"})).toBeDisabled({time: 2000});
   await page1.locator("#toggleBtn").click();
   await expect(page1.getByRole("button",{name: "Disabled Button"})).toBeHidden({time: 2000});
   await expect(page1.getByRole("button",{name: "Enabled Button"})).toBeEnabled({time: 2000});

});   

test("validate Dynamic Buttons functionality", async() => {

   await page1.getByRole("button", {name: "Add New Button"}).click();
   await expect(page1.locator("#dynamicContainer")).toBeVisible();

// Click dynamic button
   await page1.locator("#dynamicBtn1").click();
   await page1.getByRole("button", {name: "Add New Button"}).click();
   await page1.locator("#dynamicBtn2").click();

// Remove dynamic button
   await page1.getByRole("button", { name: "Remove Last Button" }).click();

// Verify button removed
   await expect(page1.locator("#dynamicBtn2")).toHaveCount(0);
   await page1.getByRole("button", { name: "Remove Last Button" }).click();
   await expect(page1.locator("#dynamicBtn1")).toHaveCount(0);

});   

test("validate Double Click Button functionality", async() => {

   await page1.getByRole("button",{name: "Double Click Me!"}).dblclick();
   await expect(page1.locator("#doubleClickMessage")).toBeVisible();
   const msg05 = await page1.locator("#doubleClickMessage").textContent();
   expect(msg05).toBe("Double click detected!");
   await expect(page1.locator("#doubleClickMessage")).toBeHidden();

  });


test("validate Button with Delay functionality", async() => {

   await page1.getByRole("button", {name: "Click Me (3s delay)"}).click();
   await expect(page1.locator("#delayMessage")).toBeVisible({timeout : 5000});
   const delayMessage = await page1.locator("#delayMessage");
   await expect(delayMessage).toHaveText("Processing complete after 3 seconds!");
   await expect(page1.locator("#delayMessage")).toBeVisible({timeout: 5000});

});    

test("validate  Right Click (Context Menu) functionality", async() => {

   await page1.getByRole("button", {name: "Right Click Me!"}).click({button: "right"});
   await page1.locator("#contextMenu").hover();
   await page1.keyboard.press("ArrowDown");
   await page1.keyboard.press("Enter");
   await page1.waitForTimeout(3000);

});   

test("validate Multiple Right Click Buttons functionality", async() => {

   await page1.getByRole("button", {name: "Right Click Button 1"}).click({button : "right"});
   await expect(page1.locator("#multiRightClickMessage")).toBeVisible();
   const msg07 = await page1.locator("#multiRightClickMessage").textContent();
   expect(msg07).toBe("Right-clicked on Button 1. Action: Edit");
   await expect(page1.locator("#multiRightClickMessage")).toBeVisible({timeout: 3000});

   await page1.getByRole("button", {name: "Right Click Button 2"}).click({button : "right"});
   await expect(page1.locator("#multiRightClickMessage")).toBeVisible();
   const msg08 = await page1.locator("#multiRightClickMessage").textContent();
   expect(msg08).toBe("Right-clicked on Button 2. Action: Copy");
   await expect(page1.locator("#multiRightClickMessage")).toBeVisible({timeout: 3000});

   await page1.getByRole("button", {name: "Right Click Button 3"}).click({button : "right"});
   await expect(page1.locator("#multiRightClickMessage")).toBeVisible();
   const msg09 = await page1.locator("#multiRightClickMessage").textContent();
   expect(msg09).toBe("Right-clicked on Button 3. Action: Delete");
   await expect(page1.locator("#multiRightClickMessage")).toBeVisible({timeout: 3000});

});   