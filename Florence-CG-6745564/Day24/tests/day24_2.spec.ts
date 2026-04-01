import { test} from "@playwright/test"
test('waitforevent',async({page})=>{
    await page.goto('https://www.flipkart.com/search?q=phones&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off');
    let newpage=page.waitForEvent('popup');
    await page.locator('//div[@class="col col-7-12"]').nth(3).click();
    console.log(await (await newpage).locator('//h1[@class="v1zwn21k v1zwn26 _1psv1zeb9 _1psv1ze0"]').first().textContent())
})