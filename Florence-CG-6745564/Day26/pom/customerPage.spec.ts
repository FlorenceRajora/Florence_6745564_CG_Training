import { Page } from "playwright/test";


class CustomerPage {

    async selectCustomer(page: Page, fullname: string) {
        await page.locator('#userSelect').selectOption(fullname);
    }

    async login(page: Page  ) {
        await page.getByRole('button', { name: 'Login' }).click();
    }

    async clickDeposit(page: Page) {
        await page.getByRole('button', { name: 'Deposit' }).click();
    }

    async enterDepositAmount(page: Page, amount: string) {
        await page.locator('input[ng-model="amount"]').fill(amount);
    }

    async submitDeposit(page: Page) {
        await page.locator('form').getByRole('button', { name: 'Deposit' }).click();
    }

    async clickWithdraw(page: Page) {
        await page.getByRole('button', { name: 'Withdrawl' }).click();
    }

    async enterWithdrawAmount(page: Page, amount: string) {
        await page.locator('input[ng-model="amount"]').fill(amount);
    }

    async submitWithdraw(page: Page) {
        await page.getByRole('button', { name: 'Withdraw', exact: true }).click();
    }
}

export default CustomerPage;