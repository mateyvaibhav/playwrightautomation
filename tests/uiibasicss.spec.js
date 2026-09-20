import { expect, test } from '@playwright/test';

test('Browser context playwright test', async ({ browser }) => {
   
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagepractise/");
    console.log(await page.title());

    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");

    const cardTitles = page.locator(".card-body a");

   await userName.fill("rahulshettya");
    await page.locator("[type='password']").fill("Learning@830$3mK2");
    await signIn.click();

    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    await userName.fill("rahulshettyacademy");
    await signIn.click();

   //console.log(await cardTitles.first().textContent());
  // console.log(await cardTitles.nth(1).textContent());
   const allTitles = await cardTitles.allTextContents();
   console.log(allTitles);

    //await page.pause();

    
});

    test('UI Controls', async ({ page }) => {
   
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const documentlink = page.locator("[href*='documents-request']");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");

    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect (page.locator(".radiotextsty").last()).toBeChecked();

      await page.locator("#terms").click();
      await expect (page.locator('#terms')).toBeChecked();
      await page.locator("#terms").uncheck();
      expect ( await page.locator("#terms").isChecked()).toBeFalsy();
      await expect(documentlink).toHaveAttribute("class","blinkingText");
      

   // await page.pause();

    });