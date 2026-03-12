import {test} from "@playwright/test"
// to change autowait timeout for particular file.
// test.use({actionTimeout: 5000})

//type vs fill method
//type is deprecated
//fill is recommended
//type will write one by one
//fill will write all at once
//type will not overwrite the text if already present
//fill will overwrite the text if already present

test("web elements", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByRole("textbox",{name:"Username",exact:true}).type("student")
    await page.getByLabel("Username").type("student1")
    await page.getByRole("textbox",{name:"Password",exact:true}).fill("Password123")
    await page.getByLabel("Password").fill("Password1234")

//     //textContent vs inputValue
//     //textContent accesses through DOM structure
//     //inputValue accesses through frontend 
//     // let a = await page.getByRole("textbox",{name:"Username",exact:true}).textContent()
//     // console.log(a)
//     // let b = await page.getByRole("textbox",{name:"Username",exact:true}).inputValue()
//     // console.log(b)

//     //is methods are used for verify (boolean based)
//     //These are executed in last
//     console.log()
})

// test("Call function Amazon", async ({page})=>{
//     await page.goto("https://www.amazon.in/")
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill('shoes')
//     await page.locator('//input[@id="nav-search-submit-button"]').click()
//     await page.locator('//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]').first().waitFor()
//     let e = await page.locator('//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]').all()
//     console.log(e)
// })



//innertext vs textcontent
//innertext is deprecated
//textcontent is recommended
//innertext will print hidden elements
//textcontent will not print hidden elements