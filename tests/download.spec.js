

import { expect, test} from '@playwright/test';

test("Validate PDF opens - @sanity", async({page}) => {

       await page.goto("");
       const downloadEvent = page.waitForEvent('download');
       page.getByRole("button", {name: "Download Text File"}).click();
       const download = await downloadEvent;

       await download.saveAs(`download/${download.suggestedFilename()}`);
       await page.waitForTimeout(2000);

});    
