import { test } from "@playwright/test" 

test("xpath Amazon", async ({ page }) => {
    await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=822715363337007283&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061786&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('phones')
    await page.locator('//input[@id="nav-search-submit-button"]').click()
    await page.locator('//li[@id="p_n_g-1003517064111/51258733031"]/descendant::i').click()
    await page.screenshot({path:"Screenshot/Day12Task"})

})
    //contains method
    // let a = await page.locator('//span[contains(text(),"Tue")]').first().innerText()
    // console.log(a)


    //child,descendant,preceding sibling,following sibling
    ////div[@id="form"]/descendant::input[@id="username"]/preceding-sibling::label/following-sibling::input
    //This is for practice automation site.

    //traversing from name to price of phone in flipkart
    //div[text()="MOTOROLA g06 power (Pantone tapestry, 64 GB)"]/following::div[@class="hZ3P6w DeU9vF" and .="₹8,999"]

    //locating special tags like svg,path,g,etc
    //*[name()="path" and contains(@class,"dWptfd")and contains(@d,"m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203")]