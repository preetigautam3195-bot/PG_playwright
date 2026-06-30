
import { chromium, expect, test } from "@playwright/test";

test("fixture1", async({page}) => {

    const browser = await chromium.launch({headless: false});

    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto("https://www.facebook.com");
    
    const page2 = await context1.newPage();
    await page2.goto("https://www.flipkart.com");
    
    const context2 = await browser.newContext();
    const page3 = await context2.newPage();
    await page3.goto("https://www.amazon.com"); 

    const page4 = await context2.newPage();
    await page4.goto("https://www.techelliptica.com");

});