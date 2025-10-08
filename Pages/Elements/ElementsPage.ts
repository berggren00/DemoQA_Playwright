import { test, expect, Locator, Page } from '@playwright/test'
import { BasePage } from '../BasePage'

export class ElementsPage extends BasePage {
     

    getListElement(name: string): Locator {
        return this.page.locator('li', { hasText: name });
    }

    async open() {
        await super.open("/elements");
        await this.assertLoaded(/elements/i);
    }

    async goToListElement(name: string) {
        await expect(this.getListElement(name)).toBeVisible();
        await this.getListElement(name).click();
    }

}