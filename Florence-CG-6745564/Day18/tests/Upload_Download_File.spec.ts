// import { test } from "@playwright/test";
// import path from "path";

// test("upload file",async ({page})=>{
//     // console.log(__dirname);
//     // console.log(__filename);
//     await page.goto('https://testautomationpractice.blogspot.com/')

//     //? -----------CASE 1---------------------------------------------------------------------------------------------------------------------
//     // await page.locator('#singleFileInput').setInputFiles("C:/Users/kuzur/Desktop/code here only in tests/Playwright/tests/uploadfile/demo.txt")  
//     // await page.getByRole("button",{name:"Upload Single File"}).click()
//     // await page.waitForTimeout(3000)
//     // await page.locator('#multipleFilesInput').setInputFiles(["C:/Users/kuzur/Desktop/code here only in tests/Playwright/tests/uploadfile/demo.txt","C:/Users/kuzur/Desktop/code here only in tests/Playwright/tests/uploadfile/demo.xlsx"])
//     // await page.getByRole("button",{name:"Upload Multiple File"}).click()
//     // await page.waitForTimeout(3000)

//     //?------------CASE 2----------------------------------------------------------------------------------------------------------------------
      
//     //  await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,"uploadfile/demo.txt"))
//     //  await page.getByRole("button",{name:"Upload Single File"}).click()
//     //  await page.locator('#multipleFilesInput').setInputFiles([path.join(__dirname,"uploadfile/demo.txt"),path.join(__dirname,"uploadfile/demo.xlsx")])
//     //  await page.getByRole("button",{name:"Upload Multiple File"}).click()
//      await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,"../screenshot/q1.png"))
//      await page.getByRole("button",{name:"Upload Single File"}).click()
// })

import { test } from "@playwright/test";
import path from "path";

test("download_with_path",async ({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    let download_folder='C:/Users/flore/OneDrive/Desktop/Florence_Capegemini_Training_6745564/Florence-CG-6745564/Day18/dwnl'
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0');
    await page.locator('#writeArea').fill("florence");
    await page.locator('#fileName').fill("florence.txt");
    //await expect(page.locator('#fileName')).toHaveValue('florence.txt');
    let [download_file]=await Promise.all([
        page.waitForEvent('download'),
        page.locator('#downloadButton').click()
    ])
    let fillename=await download_file.suggestedFilename()

    await download_file.saveAs(path.join(download_folder,fillename))
    
    await page.waitForTimeout(3000);
})