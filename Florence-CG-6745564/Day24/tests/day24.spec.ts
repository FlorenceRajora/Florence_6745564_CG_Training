import { test, expect } from "@playwright/test"
import { login } from "../project_object_model/day24pom.spec"
import fs from "fs"
import path from "path"

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../utility/day24.json"), "utf-8")
)

test("shopping flow", async ({ page }) => {

  const shop = new login(page)

  await page.goto(data.url)

  await shop.login(data.email, data.password)

  await expect(page.getByText("Logout")).toBeVisible()

  await shop.navigateToWomenDress()

  await expect(shop.products.first()).toBeVisible()

  await shop.selectProduct(data.firstProductIndex)

  await shop.goToCart()

  await expect(shop.cartItems).toHaveCount(1)

  await shop.goBack()

  await shop.selectProduct(data.secondProductIndex)

  await shop.goToCart()

  await expect(shop.cartItems).toHaveCount(2)

  await page.screenshot({
    path: "screenshots/women-cart.png",
    fullPage: true
  })

  await shop.clearCart()

  await expect(shop.cartItems).toHaveCount(0)

  await expect(page.locator("text=Cart is empty")).toBeVisible()
})