import { test } from "@playwright/test";

class Example{
    usernameTF:String
    passwordTF:String
    SubmitBtn:any

    constructor(page:any){
        this.usernameTF = page.locator("#username");
        this.passwordTF = page.locator("#password");
        this.SubmitBtn = page.locator("#submit");
    }

    async login(username:string,password:string){
        await this.usernameTF.fill(username)
        await this.passwordTF.fill(password)
        await this.SubmitBtn.click()
    }

}

export default Example;