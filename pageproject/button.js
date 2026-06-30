
import { expect } from '@playwright/test';

export class buttonpage{

    constructor(page){
        this.page = page;
        this.primaryButton = this.page.getByRole("button", {name: "Primary Button"});
        this.secondaryButton = this.page.getByRole("button", {name: "Secondary Button"})
        this.msg = this.page.locator("[id='basicMessage']");

    }

   async clickOnPrimaryButton(){    
       await this.primaryButton.click();
   }
   async showAndHideTextValidation(expectedText){
        //await expect(this.msg).toBeVisible();
        const msg = await this.msg.textContent();
        await expect(msg).toBe(expectedText);
        await expect(this.msg).toBeHidden({timeout : 5000});
   }
 
   async clickOnSecondaryButton(){  
    await this.secondaryButton.click();  
   }
   async showAndHideSecondaryTextValidation(expectedText){
        //await expect(this.msg).toBeVisible();
        const msg = await this.msg.textContent();
        await expect(msg).toBe(expectedText);
        await expect(this.msg).toBeHidden({timeout : 5000});
   }
}
//let buttonpage = new Buttonpage(page1);



