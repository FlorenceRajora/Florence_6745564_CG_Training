import { Page } from "playwright/test";


class CommonPage {

    async waitForWithdrawForm(page: Page) {
        await page.getByText("Amount to be Withdrawn").waitFor();
    }

    async waitForSuccess(page: Page) {
        await page.getByText("Transaction successful").waitFor();
    }

    async takeScreenshot(page: Page) {
        await page.screenshot({ path: "withdraw_success.png", fullPage: true });
    }

    async logout(page: Page) {
        const logoutBtn = page.getByRole("button", { name: "Logout" });
        await logoutBtn.waitFor();
        await logoutBtn.click();
    }
}

export default CommonPage;