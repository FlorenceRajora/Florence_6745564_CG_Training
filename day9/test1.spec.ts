// import {test} from "@playwright/test"
// test("title",() => {
//     console.log("test1")
// });
// test("title2",() => {
//     console.log("test2")
// });
// test("title3",() => {
//     console.log("test3")
// });
// test("Amazon", async ({browser}) => {
//     let context = await browser.newContext()
//     let page= await context.newPage()
//     let page2= await context.newPage()
//     await page.goto("https://www.amazon.in/")
//     await page.locator("input#twotabsearchtextbox").fill("iPhone 14 Pro Max")
//     await page2.goto("https://www.flipkart.com/")
//     // console.log(await page.title())
// })
// test("Amazon", async ({ browser }) => {

//     const context = await browser.newContext({
//         slowMo: 1000   // slows actions so you can watch
//     });

//     const page = await context.newPage();

//     await page.goto("https://www.amazon.in/");

//     await page.locator("input#twotabsearchtextbox")
//         .fill("iPhone 14 Pro Max");

//     await page.keyboard.press("Enter"); // perform search

//     // wait until results are visible
//     await page.waitForLoadState("networkidle");

//     await page.waitForTimeout(5000); // keep page open for 5 sec so you can see
// });


// Annotations
/**
 * skip
 * only
 * fixme
 * fail
 * describe
 * slow
 * setTimeout
 */

import {test} from "@playwright/test"
// test.skip("test1", async ({}) => {
//     console.log("test1")
// });
// test("test2", async ({}) => {
//     console.log("test2")
// });
// test.fixme("test3", async ({}) => {
//     console.log("test3")
// });
// test("test4", async ({}) => {
//     test.slow()
//     console.log("test4")
// });
// test.fail("test5", async ({}) => {
//     console.log("test5")
//     test.fail("",async({page})=>{
// })
// test("",()=>{

// })
// });
// test("Amazon", async ({ browser }) => {

//     const context = await browser.newContext({
//         slowMo: 1000   // slows actions so you can watch
//     });

//     const page = await context.newPage();
//     // let size = page.viewportSize()
//     // console.log(size);
    

//     await page.goto("https://www.amazon.com/");
//     console.log(await page.title());
    

//     await page.locator("input#twotabsearchtextbox")
//         .fill("earbuds");

//     await page.keyboard.press("Enter"); // perform search

//     // wait until results are visible
//     await page.waitForLoadState("networkidle");

//     // await page.waitForTimeout(5000); // keep page open for 5 sec so you can see
// });
// COMMAND	                                   HEADED	                      PARALLEL
// npx playwright test	                      ❌ No (headless by default)	✅ Yes
// npx playwright test --headed               ✅ Yes	                        ✅ Yes
// npx playwright test --workers=1	          ❌ No	                        ❌ No (runs sequentially)
// npx playwright test --workers > 1	      ❌ No	                        ✅ Yes
// npx playwright test --headed --workers=3	  ✅ Yes	                        ✅ Yes
// npx playwright test --debug	              ✅ Yes	                        ❌ No (forces single worker)



// alternate command for report : "npx playwright show-report --port=9999"

test("Amazon", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
  
    await page.goto("https://www.amazon.in/", {
      waitUntil: "load"
    })
    await page.screenshot({path: 'screenshot/page.png'})
    console.log(await context.cookies())
  
    await page.waitForLoadState("networkidle");
  
    const url = await page.url();
    console.log(url);
    await browser.close()
  });