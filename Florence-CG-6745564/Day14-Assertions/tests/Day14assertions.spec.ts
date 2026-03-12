import { test, expect } from "@playwright/test";

// test("auto-assertions", async ({ page }) => {
//   await page.goto("https://practicetestautomation.com/practice-test-login/");
//   let uname = page.getByRole("textbox", { name: "username" });
//   let pass = page.getByRole("textbox", { name: "password" });
//   await uname.fill("Prince");
//   await expect(uname).toHaveValue("Prince");
//   await expect(uname).toHaveScreenshot();
// });

test("non-assertions", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  let uname = page.getByRole("textbox", { name: "username" });
  let pass = page.getByRole("textbox", { name: "password" });
  await uname.fill("Florence");
  await expect("Florence").toContain("rin");
  await expect([1, 76, 11, 4, 3, 94, 4]).toContain(76);
  await expect("Florence").not.toContain("sat");
  await expect(await uname.inputValue()).toContain("Flo");
});
