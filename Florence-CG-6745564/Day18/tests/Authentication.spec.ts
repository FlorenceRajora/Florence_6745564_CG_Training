import { expect, test } from "@playwright/test";

test("authentication",async ({browser})=>{
    let context = await browser.newContext({httpCredentials:{username:"admin",password:"admin"}})

    let page = await context.newPage()
    let page2 = await context.newPage()
    await page.goto('https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/')
    await page2.goto('https://the-internet.herokuapp.com/basic_auth')
    await expect(page2.locator('//div[@class="example"]')).toContainText("Congratulations! You must have the proper credentials.")
})