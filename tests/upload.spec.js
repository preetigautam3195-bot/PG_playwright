
import  { test, expect } from '@playwright/test';

test("validate File Upload functionality", async({page}) => {

    await page.goto("file:///C:/Users/Preeti%20Gautam/PycharmProjects/PythonProject/Test1/automation-practice-master/app/index.html");
    await expect.soft(page).toHaveTitle("Automation Practice - Home");
    await page.getByText("File Upload").click();

    await page.locator("[id='singleFile']").setInputFiles('files/test01.png');
    await page.getByRole("button", {name: "Upload File"}).nth(0).click();
    await page.waitForTimeout(4000);

});    


test("validate Multiple File Upload functionality", async({page}) => {

    await page.goto("file:///C:/Users/Preeti%20Gautam/PycharmProjects/PythonProject/Test1/automation-practice-master/app/index.html");
    await expect.soft(page).toHaveTitle("Automation Practice - Home");
    await page.getByText("File Upload").click();

    await page.locator("[id='multipleFiles']").setInputFiles(['files/test01.png', 'files/test02.pdf']);
    await page.getByRole("button", {name: "Upload All Files"}).nth(0).click();
    await page.waitForTimeout(4000);    
    
});


test("validate File Type Restriction functionality", async({page}) => {
    await page.goto("file:///C:/Users/Preeti%20Gautam/PycharmProjects/PythonProject/Test1/automation-practice-master/app/index.html");
    await expect.soft(page).toHaveTitle("Automation Practice - Home");
    await page.getByText("File Upload").click();

    await page.locator("[id='imageFile']").setInputFiles('files/test03.png');
    await page.getByRole("button", {name: "Upload Image"}).click();
    await page.waitForTimeout(4000);

});    


test("validate File Size Validation functionality", async({page}) => {

    await page.goto("file:///C:/Users/Preeti%20Gautam/PycharmProjects/PythonProject/Test1/automation-practice-master/app/index.html");
    await expect.soft(page).toHaveTitle("Automation Practice - Home");
    await page.getByText("File Upload").click();

    await page.locator("[id='sizeFile']").setInputFiles('files/test04.pdf');
    await page.getByRole("button", {name: "Upload File"}).nth(1).click();
    await page.waitForTimeout(3000);

});    