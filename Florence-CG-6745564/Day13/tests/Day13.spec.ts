import test from "@playwright/test"

// test("Name+Price Amazon", async ({page})=>{
//     await page.goto("https://www.amazon.com/")
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill('samsung phones')
//     await page.locator('//input[@id="nav-search-submit-button"]').click()
//     let NP = await page.locator('//span[text() ="Galaxy S26, Unlocked Android Smartphone + $100 Gift Card, 512GB, Powerful Processor, Galaxy AI, Immersive Viewing, Durable Battery, 2026, US 1 Year Warranty, Black"] | //span[text() ="899"]').allTextContents()
//     console.log(NP)
// })

//getby Methods
    //need only partial text
        //getbyText
        //getbyAltText
        //getbyLabel
        //getbyTitle
        //getbyPlaceholder

//have different beahviour
    //getbyTestId
    //getbyRole

// test("getbyElements", async ({page})=>{
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//     // await page.getByLabel("Username",{exact:true}).fill("student")
//     // await page.getByLabel("Password").fill("Password123")
//     // await page.getByText("Submit").first().click()


//     //getByRole
//     await page.getByRole("textbox",{name:"Username",exact:true}).fill("student")
//     await page.getByRole("textbox",{name:"Password",exact:true}).fill("Password123")
//     await page.getByRole("button",{name:"Submit",exact:true}).click()   
// })

test("getbyTestId", async ({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId("username").fill("student")

})