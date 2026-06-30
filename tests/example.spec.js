
import { test, expect } from '@playwright/test';
import users from '../data/users.json' with {type : "json"}

for(let user of users){

test(`test ${user.scenario}`, async ({ page }) => {
  await page.goto('file:///C:/Users/Preeti%20Gautam/PycharmProjects/PythonProject/Test1/automation-practice-master/app/form-submission.html');
  await page.locator('#practiceForm div').filter({ hasText: 'Full Name *' }).click();
  await page.getByRole('textbox', { name: 'Full Name *' }).fill(user.FullName);
  await page.getByRole('textbox', { name: 'Email Address *' }).click();
  await page.getByRole('textbox', { name: 'Email Address *' }).fill(user.EmailAddress);
  await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password *' }).fill('P');
  await page.getByRole('textbox', { name: 'Password *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password *' }).fill(user.Password);
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill(user.PhoneNumber);
  await page.getByRole('spinbutton', { name: 'Age' }).click();
  await page.getByRole('spinbutton', { name: 'Age' }).fill(user.Age);
  await page.getByLabel('Country').selectOption(user.Country);
  await page.getByRole('textbox', { name: 'Bio / About Me' }).click();
  await page.getByRole('textbox', { name: 'Bio / About Me' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Bio / About Me' }).fill('I');
  await page.getByRole('textbox', { name: 'Bio / About Me' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Bio / About Me' }).fill(user.BioAboutMe);
  await page.getByRole('button', { name: 'Submit Form' }).click();
});

}