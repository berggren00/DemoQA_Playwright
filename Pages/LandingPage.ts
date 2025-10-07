import { BasePage } from "./BasePage";
import { Locator, test, expect, Page } from "@playwright/test";
    

export class LandingPage extends BasePage {
    private readonly title: Locator;
    private readonly elementPage: Locator;
    private readonly formsPage: Locator;
    private readonly alertPage: Locator;
    private readonly widgetPage: Locator;
    private readonly interactionsPage: Locator;
    private readonly bookStorePage: Locator;

    constructor(page: Page) {
        super(page);
        this.title = this.page.getByRole('link').filter({ hasText: /^$/ });
        this.elementPage = this.page.getByRole('heading', { name: 'Elements' });
        this.formsPage = this.page.getByRole('heading', { name: 'Forms' });
        this.alertPage = this.page.getByRole('heading', { name: 'Alerts, Frame & Windows' });
        this.widgetPage = this.page.getByRole('heading', { name: 'Widgets' });
        this.interactionsPage = this.page.getByRole('heading', { name: 'Interactions' });
        this.bookStorePage = this.page.getByRole('heading', { name: 'Book Store Application' });
  
    }

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
