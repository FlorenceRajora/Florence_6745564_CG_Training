
import { test, expect } from "@playwright/test";
import LoginPage from "../pom/loginPage.spec.js";
import ManagerPage from "../pom/managerPage.spec.js";
import CustomerPage from "../pom/customerPage.spec.js";
import CommonPage from "../pom/commonPage.spec.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.resolve(__dirname, "../utility/task1.json");
const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
test("E2E Banking Flow", async ({ page }) => {
    const login = new LoginPage();
    const manager = new ManagerPage();
    const customer = new CustomerPage();
    const common = new CommonPage();
    page.on("dialog", async (dialog) => {
        await dialog.accept();
    });
    await login.navigate(page, "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
    await login.clickBankManager(page);
    await manager.addCustomer(page);
    await manager.enterFirstName(page, data.fname);
    await manager.enterLastName(page, data.lname);
    await manager.enterPostCode(page, data.code);
    await manager.submitCustomer(page);
    await manager.openAccount(page);
    await manager.selectCustomer(page, data.fullname);
    await manager.selectCurrency(page, data.money);
    await manager.processAccount(page);
    await manager.goHome(page);
    await login.clickCustomerLogin(page);
    await customer.selectCustomer(page, data.fullname);
    await customer.login(page);
    await customer.clickDeposit(page);
    await customer.enterDepositAmount(page, String(data.amount));
    await customer.submitDeposit(page);
    await customer.clickWithdraw(page);
    await common.waitForWithdrawForm(page);
    await customer.enterWithdrawAmount(page, String(data.withdrawn));
    await customer.submitWithdraw(page);
    await common.waitForSuccess(page);
    const screenshotDir = path.resolve(__dirname, "../screenshots");
    if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir);
    }
    const fileName = `task.png`;
    await page.screenshot({ path: path.join(screenshotDir, fileName),fullPage: true });
    await common.logout(page);
});