import { expect, Locator } from '@playwright/test'
import { BasePage } from '../BasePage'
import { Buttons } from './Buttons';
import { TextBox } from './TextBox';
import { DynamicProperties } from './DynamicProperties';
import { WebTables } from './WebTables';

export class ElementsPage extends BasePage {
     

    getListElement(name: string): Locator {
        const sidebar = this.page.locator('.element-list .menu-list');
        return sidebar.locator('li').filter({ has: this.page.getByText(name, { exact: true })
        });
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

    async goToWebTables() {
        await this.goToListElement("Web Tables");
        await this.assertLoaded(/webtables/i);
        return new WebTables(this.page);
    }

}