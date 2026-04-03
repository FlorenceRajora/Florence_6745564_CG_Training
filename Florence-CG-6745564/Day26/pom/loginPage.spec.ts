import { Page } from "playwright/test";

class LoginPage {

    async navigate(page: Page, url: string) {
        await page.goto(url);
    }

    async clickBankManager(page: Page       ) {
        await page.getByRole('button', { name: 'Bank Manager Login' }).click();
    }

    async clickCustomerLogin(page: Page) {
        await page.getByRole('button', { name: 'Customer Login' }).click();
    }
}

export default LoginPage;