import {test} from "@playwright/test"
test("waits",async({page})=>{
    await page.goto('https://www.flipkart.com/');
    //await page.getByRole('button',{name:'✕'});
    await page.getByPlaceholder('Search for Products, Brands and More').first().fill("shoes");
    await page.keyboard.press("Enter");
    const [newpage]=await Promise.all([//page.waitForEvent('popup'),
        page.waitForNavigation(),
        page.locator('//div[@class="bLCLBY nr15la"]').first().click()]);
    let price=await newpage.locator('//div[@class="v1zwn21k v1zwn20 _1psv1zeb9 _1psv1ze0"]').textContent();
    console.log(await page.url());
    console.log(await newpage.url());
    
    
    console.log(price);
    
})