import { test } from '@playwright/test';

test("Fill form using keyboard actions", async ({ page }) => {

    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.locator('#name').click();
    await page.keyboard.type("Florence");
    await page.keyboard.press("Tab");
    await page.keyboard.type("Florence@gmail.com");
    await page.keyboard.press('Control+C');
    await page.keyboard.press("Tab");
    await page.keyboard.press('Control+V');
    // await page.keyboard.type("Florence@gmail.com");
    await page.waitForTimeout(5000)
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");

});