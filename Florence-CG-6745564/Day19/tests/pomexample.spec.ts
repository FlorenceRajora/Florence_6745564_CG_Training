import { test } from "@playwright/test";
import example from "../PageObjectModel/example.page";
import fs from "fs";
import path from "path";

const user = fs.readFileSync(
  path.join(__dirname, "../test data/user.json"),
  "utf-8"
);

const userfile = JSON.parse(user);

test("pom", async ({ page }) => {

  const examplepage = new example(page);

  for (const u of userfile) {

    await page.goto(u.url);

    await examplepage.usernameTF.fill(u.username);
    await examplepage.passwordTf.fill(u.password);

    await examplepage.SubmitBtn.click();

    await page.waitForTimeout(1000);
  }

});