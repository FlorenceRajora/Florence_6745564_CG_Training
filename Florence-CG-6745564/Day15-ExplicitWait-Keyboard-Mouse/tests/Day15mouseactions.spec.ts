import {test} from "@playwright/test"

// test("basic_mouse_action",async({page}) => {

//     await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
//     await page.locator("#btn").click({button:"right", clickCount:2, force:true})
//     await page.locator("#btn").dblclick()

//     await page.locator("#btn").hover()
//     await page.mouse.down()
//     await page.mouse.up()

// })

// test("hold_and_release",async({page}) => {

//     await page.goto('https://demoapps.qspiders.com/ui/clickHold?sublist=0')


//     await page.locator('//div[@id="circle"]').hover()
//     await page.mouse.down()
//     await page.waitForTimeout(3000)
//     await page.mouse.up()
// })

// test("disabled",async({page}) => {

//     await page.goto('https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4')

//     //this is not working because the button is disabled
//     //await page.locator('//input[@id="submit"]').click({force:true})

//     await page.locator('//input[@id="submit"]').dispatchEvent('click')
// })

// test("drag_and_drop",async({page}) => {

//     await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')

//     //basic drag and drop
//     await page.locator('//div[text() ="Mobile Charger"]').hover()
//     await page.mouse.down()
//     await page.locator('//div[text()="Mobile Accessories"]').hover()
//     await page.mouse.up()
    
//     //dragTo method
//     //await page.locator('').dragTo(page.locator(''))
// })

test.only("scroll", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
  await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()
  await page.locator('//input[@type="checkbox"]').check()
  await page.waitForTimeout(3000)

  await page.mouse.move(100,100)
});



