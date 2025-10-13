import { test, expect, Locator, Page } from '@playwright/test'
import { BasePage } from '../BasePage'
import { Buttons } from './Buttons';
import { TextBox } from './TextBox';
import { DynamicProperties } from './DynamicProperties';

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

    async goToButtons() {
        await this.goToListElement("Buttons");
        await this.assertLoaded(/buttons/i);
        return new Buttons(this.page);
    }

    async goToTextbox() {
        await this.goToListElement("Text Box");
        await this.assertLoaded(/text-box/i);
        return new TextBox(this.page)
    }

    async goToDynamicProp() {
        await this.goToListElement("Dynamic Properties");
        await this.assertLoaded(/dynamic-properties/i);
        return new DynamicProperties(this.page);
    }

}