import{test} from "@playwright/test"


test("title",async({browser,browserName})=>{
    let context = await browser.newContext()
    let page = await context.newPage()
    let page2 = await context.newPage()
    
    //goto
    await page.goto("https://www.amazon.in/")
    await page.locator("input#twotabsearchtextbox").fill("shoes")
    console.log(browserName)
    await page.pause()
    await page2.goto("https://www.flipkart.com/")

})




//!fixtures--> It is a setup block of code which is resuseable

/**
 * page
 * test("title",async({page})=>{
    
    //goto
    await page.goto("https://www.amazon.in/")
    await page.locator("input#twotabsearchtextbox").fill("shoes")
})

 * browser
test("title",async({browser})=>{
    let context = await browser.newContext()
    let page = await context.newPage()
    
    //goto
    await page.goto("https://www.amazon.in/")
    await page.locator("input#twotabsearchtextbox").fill("shoes")
})

 * browserName
 * context
 * test("title",async({context})=>{
    let page = await context.newPage()
    
    //goto
    await page.goto("https://www.amazon.in/")
    await page.locator("input#twotabsearchtextbox").fill("shoes")
})

 * request --> API
 */

