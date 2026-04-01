import { test } from "@playwright/test";
import example from "../PageObjectModel/PomMethods.page.ts";
import path from "path";


test("pom methods", async({page}) => {
    let examplepage = new example(page)
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await examplepage.login("student","Password123")

})