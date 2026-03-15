import { Page, Locator } from "@playwright/test";

class example {

    usernameTF: Locator;
    passwordTf: Locator;
    SubmitBtn: Locator;

    constructor(page: Page) {
        this.usernameTF = page.locator("#username");
        this.passwordTf = page.locator("#password");
        this.SubmitBtn = page.locator("#submit");
    }

}

export default example;