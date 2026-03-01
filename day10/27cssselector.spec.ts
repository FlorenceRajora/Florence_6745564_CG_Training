import { test } from "@playwright/test";
test("css selector",async({page})=>{
    await page.goto("https://techbeamers.com/practice-test-login/");
    await page.locator("input#username").fill("testuser");
    await page.locator("input#password").fill("password123");
    await page.locator('button[type="submit"]').click();
    // await page.locator("a.wp-block-button__link").click();
})