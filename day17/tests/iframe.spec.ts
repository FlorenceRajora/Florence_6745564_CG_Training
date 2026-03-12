import {test} from "@playwright/test"
test("iframe",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames//")
    // const frame = page.frameLocator("#iframe")
    // .fill("welcome to frame")
    //await frame.locator("#mytext1")
    let frame =await page.frames()
    console.log(frame.length)
    console.log(frame)

    // for( let i in frame){
    // console.log( await frame[i].title())    
    // }
    for( let i of frame){
    console.log( await i.title())    
    }
    await page.title()

    let frame2=await page.frame({url: "https://ui.vision/demo/webtest/frames//frame_1.html"})
    // await frame2?.frameLocator("").locator
    await frame2?.locator("#mytext1").fill("welcome to frame 2")

})