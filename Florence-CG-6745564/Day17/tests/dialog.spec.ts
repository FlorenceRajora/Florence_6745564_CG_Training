// import {test} from "@playwright/test"

// test("dialogs",async({page})=>{
    //page.on("event",()=>{})  --> all alerts will be handeled
//    //page.on("event",()=>{})   --> habdel alert only once
//    page.on("dialog",async(d)=>{
// //    await d.accept()
//    if(d.type()=="alert"){
//     await d.accept()
//    }
//    else if(d.type()=="confirm"){
//     await d.dismiss()
//     console.log(await d.message());
//    }
//    else if(d.type()=="prompt"){
//     // if(d.defaultValue()==="Tom"){
//     //     console.log(await d.defaultValue())
//     //     await d.accept()
//     // }
//         if(d.defaultValue() !="Tom"){
//         console.log(await d.defaultValue())
//         await d.accept();
//     }
//     else{
//         await d.accept("tom")
//     }
//    }
//    })
//     await page.goto('https://testautomationpractice.blogspot.com/');
// //        page.once("dialog",async(d)=>{
// //     await d.accept()
// //    })
//       await page.waitForTimeout(3000)
//     await page.locator('//button[@id="alertBtn"]').click()
// //        page.once("dialog",async(d)=>{
// //     await d.accept()
// //    })
//         await page.waitForTimeout(3000)
//     await page.locator('//button[@id="confirmBtn"]').click() // by default dialogs(popups) are dismissed,because of that we get 'cancel' instead of 'ok'
//     // await page.keyboard.press('Enter')
// //           page.on("dialog",async(d)=>{
// //     await d.accept("Sahil")
// //    })
//          await page.waitForTimeout(3000)
//     await page.locator('//button[@id="promptBtn"]').click()
//     // await page.keyboard.press('Enter') 
//     await page.waitForTimeout(3000)

// })

import { test } from "@playwright/test";
test('notification',async({browser})=>{
    let context=await browser.newContext({permissions:['notifications']});
    let page=await context.newPage();
    await page.goto('https://demoapps.qspiders.com/ui/browserNot?sublist=0');
    await page.locator('#browNotButton').click();
    let result= await page.evaluate(()=>{
        return Notification.requestPermission();
    })
    console.log(result);
    
    await page.waitForTimeout(2000);
})