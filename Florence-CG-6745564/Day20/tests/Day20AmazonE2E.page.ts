import {Locator, Page} from '@playwright/test';

class amazonE2E{
    searchbarTF: Locator;
    ramCheckBox: Locator;
    productLink: Locator;
    quantityDrpdwn: Locator;
    addToCart: Locator;
    page: Page;
    constructor(page:Page){
        this.page = page;
        this.searchbarTF = page.locator('input#twotabsearchtextbox');
        this.ramCheckBox = page.locator('//li[@id="p_n_g-1003495121111/44897292031"]/span');
        this.productLink = page.locator('//div[@class="a-section aok-relative s-image-fixed-height"]/img').nth(3);
        this.quantityDrpdwn = page.locator('//div[@class="a-column a-span12 a-text-left"]//div[@id="selectQuantity"]');
        this.addToCart = page.locator('//span[@class="a-button-inner"]/input[@id="add-to-cart-button"]');
    }

    async searchProduct(productName: string){
        await this.searchbarTF.fill(productName);
        await this.searchbarTF.press('Enter');
    }

    async selectProduct(){
        await this.ramCheckBox.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(2000);
        await this.ramCheckBox.click();
        let [page2] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.productLink.click()
        ]);
        return page2;
    }

    async selectQuantity(val: string, page2:Page){
        this.quantityDrpdwn = page2.locator('//div[@class="a-column a-span12 a-text-left"]//div[@id="selectQuantity"]/span/div/div/span/select');
        await this.quantityDrpdwn.selectOption({value: val});
        
    }

    async addToCartFxn(page2:Page){
        this.addToCart = page2.locator('//span[@class="a-button-inner"]/input[@id="add-to-cart-button"]').last();
        await this.addToCart.click();
    }
}

export default amazonE2E;