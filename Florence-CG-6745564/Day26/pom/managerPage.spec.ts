import { Page } from "playwright/test";

class ManagerPage {
    async addCustomer(page: Page) {
        await page.getByRole('button', { name: 'Add Customer' }).first().click();
    }
    async enterFirstName(page: Page, fname: any) {
        await page.getByRole('textbox', { name: 'First Name' }).fill(fname);
    }
    async enterLastName(page: Page, lname: any) {
        await page.getByRole('textbox', { name: 'Last Name' }).fill(lname);
    }
    async enterPostCode(page: Page, code: any) {
        await page.getByRole('textbox', { name: 'Post Code' }).fill(code);
    }
    async submitCustomer(page: Page) {
        await page.locator('form').getByRole('button', { name: 'Add Customer' }).click();
    }
    async openAccount(page: Page) {
        await page.getByRole('button', { name: 'Open Account' }).click();
    }
    async selectCustomer(page: Page, fullname: any) {
        await page.locator('#userSelect').selectOption(fullname);
    }
    async selectCurrency(page: Page, money: any) {
        await page.locator('#currency').selectOption(money);
    }
    async processAccount(page: Page) {
        await page.getByRole('button', { name: 'Process' }).click();
    }
    async goHome(page: Page) {
        await page.getByRole('button', { name: 'Home' }).click();
    }
}
export default ManagerPage;