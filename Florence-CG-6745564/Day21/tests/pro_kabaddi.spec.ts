import {test} from "@playwright/test"
test("pro_kabaddi",async({page})=>{
    await page.goto('https://www.prokabaddi.com/schedule-fixtures-results?tab=recent');
    //let matchdetails=await page.locator('(//div[@class="fixtures-element"])[1]/div').allTextContents();
    let matchdetails=await page.locator('(//div[@class="fixtures-element"])[1]/div[@class="element element1"] | (//div[@class="fixtures-element"])[1]/div[@class="element element2"] | (//div[@class="fixtures-element"])[1]/div[@class="element element3"]').allTextContents();
    for(let detail of matchdetails){
        console.log(detail);
        
    }
})