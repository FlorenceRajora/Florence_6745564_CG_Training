// import { test } from "@playwright/test";
// test("multiple tabs",async({browser})=>{
//     let context = await browser.newContext()
//     let page = await context.newPage()
    // // await page.goto("https://www.lenskart.com")
    // // let page2 = await context.newPage()
    // // await page2.goto("https://www.flipkart.com/")
    // // await page.waitForTimeout(3000)
    //    await page.goto("https://www.flipkart.com/")
    //    await page.getByPlaceholder("Search for Products, Brands and More").first().fill("shoes")
    //    await page.keyboard.press("Enter")

    // //    let [page2]=await Promise.all([page.waitForEvent("popup"),page.locator('//div[@class="bLCLBY nr15la"]').first().click()])
    // //   await page.waitForTimeout(3000)
    // //    console.log(page);
    // // console.log(page2);
    //    let [page2]=await Promise.all([page.waitForEvent('popup'),page.locator('//div[@class="bLCLBY nr15la"]').first().click()])
    //   await page.waitForTimeout(3000)
    //    console.log(page.url());
    // console.log(page2.url());
    // await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0")
    // await page.goto("https://demoapps.qspiders.com/ui/browser/newTab?sublist=1")
    // let [page2]=await Promise.all([
    // page.waitForEvent('popup'),
    // await page.locator('//button[@class="mt-4 px-4 py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-500"]').first().click()])
    // await page2.getByRole("button",{name:"Add to Cart"}).click()
    // await page2.waitForTimeout(3000)

    // await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    // await page.getByPlaceholder("Enter text here").fill("sahil")
    // await Promise.all([
    // page.waitForEvent('download'),
    // await page.locator('//button[@id="downloadButton"]').click()])
    // await page.waitForTimeout(3000)

// }
// )