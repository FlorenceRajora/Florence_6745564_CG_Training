import { expect, test } from "@playwright/test";

// test("standard dropdown",async({page})=>{

// await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
// await page.locator('#country_code').selectOption({value:"+91"})
// await page.locator('//select[@id="select3"]').selectOption({value:"Canada"})
// await page.waitForTimeout(3000)
// await expect(page.locator('//select[@id="select3"]')).toContainText("India")

// }
// )


// test("multi select",async({page})=>{

// await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
// await page.locator('#select-multiple-native').selectOption(["Fjallraven - Foldsac...","Mens Casual Premium ...","Mens Cotton Jacket..."])
// await page.locator('//button[@class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click()
// await page.waitForTimeout(3000)
// }
// )


// test("custom", async ({ page }) => {

//   await page.goto('https://www.myntra.com/shoes?rawQuery=shoes')

//   const arr = await page.locator('//ul[@class="sort-list"]/li').all()

//   for (const i of arr) {
//     console.log(await i.textContent())
//   }

// })

// test("custom",async({page})=>{
//     await page.goto('https://www.myntra.com/shoes?rawQuery=shoes');
//     await page.locator('//div[@class="sort-sortBy"]').click();
//     const option=await page.locator('//ul[@class="sort-list"]/li').all();
//     for( const item of option){
//         const text=await item.textContent();
//         console.log(text);
//         if(text?.includes("Discount")){
//             await item.click();
//         }
//     }
//     await page.waitForTimeout(3000)
// })

test("auto_dropdown",async({page})=>{
    await page.goto('https://www.amazon.com/');
    await page.locator('#twotabsearchtextbox').fill("shoes");
    await page.locator('//div[@class="left-pane-results-container"]').waitFor({state:"visible"});
    const options=await page.locator('//div[@class="left-pane-results-container"]/div').all();
    for(const option of options){
        const text=await option.textContent();
        if(text?.includes("women")){
           console.log(text);
        }
    }
    await page.waitForTimeout(3000)
})