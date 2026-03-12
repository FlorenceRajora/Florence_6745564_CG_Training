import {test} from "@playwright/test"

test("xapth selector", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('//*[@id="username"]').fill("student")
    await page.locator('//*[@id="password"]').fill("Password123")

    await page.locator('//*[@id="submit"]').click()
})