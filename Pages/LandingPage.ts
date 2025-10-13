import { BasePage } from "./BasePage";
import { Locator } from "@playwright/test";
    

export class LandingPage extends BasePage {
 

    getSubPage(name: string): Locator {
        const card = this.page.locator('.card-body');
        return card.filter( {has: this.page.getByRole('heading', { name: name, exact: true })})
    }

    async open() {
        await super.open("/");
        await this.assertLoaded(/\//);
    }

    async goToSubPage(name: string) {
        await this.getSubPage(name).click();
    }
}
