import {test} from "@playwright/test"

test("frames",async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame=await page.frames();

    //await pageframe.locator('//input[@name="mytext1"]').fill('nimish'); --> we can locate directly but not fill

//       console.log(frame.length);

//     for(let i of frame){
//         console.log(await i.title());}

//   console.log(await page.title());


  //?---------------------------------------------------------------------------------------------------------------
  


//   await page.frame(name:"") --> only takes string so we can only give one or all frams together, not selected, we can use name or url , here no name tag so we use url
//  let frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
//  await frame1?.locator('//input[@type="text"]').first().fill("sahil")

//  let frame2=await page.frameLocator('//frame[@src="frame_2.html"]')
//  await frame2.locator('//input[@name="mytext2"]').fill("sahil")
 
//  await page.locator('//frame[@src="frame_4.html"]').contentFrame().locator('//input[@name="mytext4"]').fill("sahil")
//    await page.locator('//frame[@src="frame_3.html"]').contentFrame().locator('//iframe[@src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]').contentFrame().locator('//div[@class="AB7Lab Id5V1"]').first().click()
//  await page.waitForTimeout(3000)

})