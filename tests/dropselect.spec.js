
import { test, expect } from '@playwright/test';


test("validation Basic Single Select interation - @dropdown", async({page}) => {
    await page.goto("file:///C:/Users/Preeti%20Gautam/PycharmProjects/PythonProject/Test1/automation-practice-master/app/index.html");
    await page.getByText("Dropdown & Select").click();
    await page.getByLabel("Select Country:").click();
    await page.getByLabel("Select Country:").selectOption({label: "India"});
    await page.keyboard.press("ArrowDown");
    await expect(page.locator("#countryResult")).toBeVisible();
    const msg0001 = await page.locator("#countryResult").textContent();
    expect(msg0001).toBe("Selected country: India");
    await expect(page.locator("#countryResult")).toBeVisible();

});    


test("validation button interation - @dropdown", async({page}) => {
    await page.goto("file:///C:/Users/Preeti%20Gautam/PycharmProjects/PythonProject/Test1/automation-practice-master/app/index.html");
    await page.getByText("Dropdown & Select").click();
    await page.locator("[id='languages']").hover();
    await page.locator("[id='languages']").selectOption([
        {label: "JavaScript"},
        {label: "Python"},
        {label: "C#"}
    ])
    await page.getByRole("button", {name: "Show Selected Languages"}).click();
    const msg002 = await page.locator("[id='languagesResult']").textContent();
    await expect(msg002).toBe("Selected languages: JavaScript, Python, C#");
    await expect(page.locator("[id='languagesResult']")).toBeVisible

});


test("validation Dependent Dropdowns - @dropdown", async({page}) => {
    await page.goto("file:///C:/Users/Preeti%20Gautam/PycharmProjects/PythonProject/Test1/automation-practice-master/app/index.html");
    await page.getByText("Dropdown & Select").click();

    const city = page.locator("[id='city']");
    await expect(city).toBeDisabled();
    await page.locator("[id='continent']").selectOption({label: "Asia"});
    await city.selectOption({label: "Mumbai"});

});    


test("validation Dynamic Options Dropdown - @dropdown", async({page}) => {
    await page.goto("file:///C:/Users/Preeti%20Gautam/PycharmProjects/PythonProject/Test1/automation-practice-master/app/index.html");;
    await page.getByText("Dropdown & Select").click();
    await page.getByRole("button", {name: "Load Options"}).click();
    await page.getByLabel("Select Option:").selectOption({ value: "opt4" });
    const msg004 = await page.locator("[id='dynamicResult']").textContent();
    expect(msg004).toBe("Selected: Option 4");
    await expect(page.locator("[id='dynamicResult']")).toBeHidden();

});


test("validation Select with Groups - @dropdown", async({page}) => {
    await page.goto("file:///C:/Users/Preeti%20Gautam/PycharmProjects/PythonProject/Test1/automation-practice-master/app/index.html");;
    await page.getByText("Dropdown & Select").click();
    await page.locator("[id='groupedSelect']").hover();
    await page.locator("[id='groupedSelect']").selectOption({label: "Windows 11"});
    const msg005 = await page.locator("[id='osResult']").textContent();
    expect(msg005).toBe("Selected OS: Windows 11");
    await expect(page.locator("[id='osResult']")).toBeVisible();


});

