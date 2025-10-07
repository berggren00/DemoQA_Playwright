import { BasePage } from "./BasePage";
import { Locator, test, expect, Page } from "@playwright/test";
    

export class LandingPage extends BasePage {
 

    getSubPage(name: string): Locator {
        return this.page.getByRole('heading', { name })
    }

    async open() {
        await super.open("/");
        await this.assertLoaded(/\//);
    }

    async goToSubPage(name: string) {
        await this.getSubPage(name).click();
    }
}
