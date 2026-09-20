import { expect, test } from '@playwright/test';
//import { text } from 'node:stream/consumers';

test('child windows hadl', async ({ browser }) => {
   
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagepractise/");
    const documentLink = page.locator("[href*='documents-request']");

    const [newpage] = await Promise.all(
    [      
    context.waitForEvent('page'),
    documentLink.click(),
    ])
     
      const text = await newpage.locator(".red").textContent();
      const arraytext = text.split("@");
      const domain = arraytext[1].split(" ")[0];
      console.log(domain);

     await page.locator("#username").fill(domain);
     console.log (await page.locator("#username").inputValue());
     
    //console.log(await page.title());

});