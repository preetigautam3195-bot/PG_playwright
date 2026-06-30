
import { expect, test} from '@playwright/test';
import { truncate } from 'node:fs';
import { isModuleNamespaceObject } from 'node:util/types';



test("Validate button insteraction - @sanity", async({page}) => {

    await page.goto("file:///C:/Users/Preeti%20Gautam/PycharmProjects/PythonProject/Test1/automation-practice-master/app/index.html");
    await page.getByText("Alerts & Modals").click();
    await page.waitForTimeout(2000);
    //page.on("dialog", async dialog => {
    //  console.log("====== Event Management ======");
    //console.log("type:", dialog.type());
    //console.log("msg", dialog.message());
    //await dialog.accept();
    //})
    //console.log("Ml1")
    const dailogAlertEvent = page.waitForEvent('dialog');
    //console.log("Ml2")
    page.getByRole("button", {name: "Show Alert"}).click();   //yaha hum await ni lga skte qki await lgane pr vo click hone ka wait kr rha h.
    //console.log("ML3")
    const dailog = await dailogAlertEvent;
    console.log("=====Event Management=====");
    console.log("type:",dailog.type());
    console.log("msg:",dailog.message());
    await dailog.accept();

});


test("Validate Confirm Dialog button insteraction", async({page}) => {

    await page.goto("file:///C:/Users/Preeti%20Gautam/PycharmProjects/PythonProject/Test1/automation-practice-master/app/index.html");
    await page.getByText("Alerts & Modals").click();
    await page.waitForTimeout(2000);
    const dailogAlertEvent = page.waitForEvent('dialog');
    page.getByRole("button", {name: "Show Confirm Dialog"}).hover();
    page.getByRole("button", {name: "Show Confirm Dialog"}).click();
    const dailog01 = await dailogAlertEvent;
    console.log("===Event Management===");
    console.log("type",dailog01.type());
    console.log("msg",dailog01.message());
    await dailog01.accept();
    expect(page.locator("[id='confirmResult']")).toBeVisible();
    const msg = await page.locator("[id='confirmResult']").textContent();
    expect(msg).toBe("You clicked OK!");

});        


test("Validate Prompt Dialog insteraction", async({page}) => {

    await page.goto("file:///C:/Users/Preeti%20Gautam/PycharmProjects/PythonProject/Test1/automation-practice-master/app/index.html");
    await page.getByText("Alerts & Modals").click();
    await page.waitForTimeout(2000);
    const dialogAlertEvent = page.waitForEvent('dialog');
    page.getByRole("button", {name: "Show Prompt"}).click();
    const dialog = await dialogAlertEvent;
    console.log("==Event Management==")
    console.log("type", dialog.type())
    console.log("msg", dialog.message())
    await dialog.dismiss();
    await page.waitForTimeout(3000);
   
}); 



test("Validate Simple Modal insteraction", async({page}) => {

    await page.goto("file:///C:/Users/Preeti%20Gautam/PycharmProjects/PythonProject/Test1/automation-practice-master/app/index.html");
    await page.getByText("Alerts & Modals").click();
    await page.waitForTimeout(2000);
    page.getByRole("button", {name: "Open Simple Modal"}).click();
    await expect(page.locator("[id='simpleModal']")).toBeVisible();
    console.log("displayed is visible")
    page.getByRole("button",{name: "Close"}).click();
    await page.waitForTimeout(2000);

});


test("Validate Confirmation Modal insteraction", async({page}) => {

    await page.goto("file:///C:/Users/Preeti%20Gautam/PycharmProjects/PythonProject/Test1/automation-practice-master/app/index.html");
    await page.getByText("Alerts & Modals").click();
    await page.waitForTimeout(2000);
    page.getByRole("button", {name: "Open Confirmation Modal"}).click();
    console.log("displayed is showing on screen")
    await expect(page.locator("[id='confirmModal']")).toBeVisible();
    page.getByRole("button", {name: "Confirm", exact: true}).click();
    await expect(page.locator("[id='modalConfirmResult']")).toBeVisible();
    console.log("Displayed is showing-You confirmed the action!")
    await page.waitForTimeout(2000);

});    



test("Validate Form Modal insteraction", async({page}) => {

    await page.goto("file:///C:/Users/Preeti%20Gautam/PycharmProjects/PythonProject/Test1/automation-practice-master/app/index.html");
    await page.getByText("Alerts & Modals").click();
    await page.waitForTimeout(2000);
    page.getByRole("button", {name: "Open Form Modal"}).click();
    console.log("Displayed meggage showing")
    page.locator("[id='modalName']").fill("preeti gautam");
    console.log("preeti gautam")
    page.locator("[id='modalEmail']").fill("preetigautam3195@gmail.com");
    console.log("preetigautam3195@gmail.com")
    page.getByRole("button", {name: "Submit", exact: true}).click();
    await expect(page.locator("[id='formModalResult']")).toBeVisible();
    console.log("Form submitted! Name: preeti gautam, Email: preetigautam3195@gmail.com - To be visible on display")

});    


test("Validate Delayed Modal insteraction", async({page}) => {

    await page.goto("file:///C:/Users/Preeti%20Gautam/PycharmProjects/PythonProject/Test1/automation-practice-master/app/index.html");
    await page.getByText("Alerts & Modals").click();
    await page.waitForTimeout(2000);
    page.getByRole("button", {name: "Show Modal (2s delay)"}).click();
    console.log("displayed is visible")
    await expect(page.locator("[id='delayedModal']")).toBeVisible();
    page.getByRole("button", {name: "Close", exact: true});
    await page.waitForTimeout(5000);

});    









