import { Page, Locator } from "@playwright/test";

export class login {

  page: Page
  loginBtn: Locator
  emailInput: Locator
  passwordInput: Locator
  loginSubmit: Locator
  womenMenu: Locator
  dressCategory: Locator
  products: Locator
  viewCart: Locator
  cartItems: Locator
  removeBtn: Locator
  continueShopping: Locator

  constructor(page: Page) {
    this.page = page
    this.loginBtn = page.getByRole('link', { name: ' Signup / Login' })
    this.emailInput = page.locator('//input[@data-qa="login-email"]')
    this.passwordInput = page.locator('//input[@data-qa="login-password"]')
    this.loginSubmit = page.getByRole('button', { name: 'Login' })
    this.womenMenu = page.getByRole('link', { name: 'Women' })
    this.dressCategory = page.getByRole('link', { name: 'Dress' })
    this.products = page.locator('.product-image-wrapper')
    this.viewCart = page.locator('a[href="/view_cart"]').first()
    this.cartItems = page.locator('.cart_description')
    this.removeBtn = page.locator('.cart_quantity_delete')
    this.continueShopping = page.getByRole('button', { name: 'Continue Shopping' })
  }

  async login(email: string, password: string) {
    await this.loginBtn.click()
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await this.loginSubmit.click()
  }

  async navigateToWomenDress() {
    await this.womenMenu.click()
    await this.dressCategory.click()
  }

  async selectProduct(index: number) {
    const product = this.products.nth(index)
    await product.hover()
    await product.getByRole('link', { name: 'Add to cart' }).first().click()
    await this.continueShopping.click()
  }

  async goToCart() {
    await this.viewCart.click()
  }

  async goBack() {
    await this.page.goBack()
  }

  async clearCart() {
    while (await this.removeBtn.count() > 0) {
      await this.removeBtn.first().click()
    }
  }
}