import { Page, expect, Locator } from "@playwright/test";

export class BasePage {
    protected page: Page

    constructor(page: Page) {
        this.page = page;
    }

    async open(path: string) {
        await this.page.goto(path, { waitUntil: 'domcontentloaded'});
    }

    async assertVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }

    async assertLoaded(url: RegExp) {
        await this.page.waitForURL(url);
    }

    async assertTitle(expected: string) {
        await expect(this.page).toHaveTitle(expected);
    }

    async fill(locator: Locator, value: string, opts?: { timeout?: number}) {
        await locator.fill(value, { timeout: opts?.timeout });
        await expect(locator).toHaveValue(value, {timeout: opts?.timeout });
    }
}

