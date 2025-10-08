import { test, expect, Page, Locator } from '@playwright/test'
import { BasePage } from '../BasePage';

export class Buttons extends BasePage {
    private readonly doubleClickButton: Locator;
    private readonly rightClickButton: Locator;
    private readonly singleClickButton: Locator;

    constructor(page: Page) {
        super(page);
        this.doubleClickButton = this.page.getByRole('button', { name: "Double Click Me"});
        this.rightClickButton = this.page.getByRole('button', { name: "Right Click Me" });
        this.singleClickButton = this.page.getByRole('button', { name: 'Click Me' }).nth(2);
    }

    async doubleClick() {
        await expect(this.doubleClickButton).toBeVisible();
        await this.doubleClickButton.dblclick();
        await this.assertVisible(this.page.getByText("You have done a double click"))
    }

    async rightClick() {
        await expect(this.rightClickButton).toBeVisible();
        await this.rightClickButton.click({button: 'right'})
        await this.assertVisible(this.page.getByText("You have done a right click"))
    }

    async singleClick() {
        await expect(this.singleClickButton).toBeVisible();
        await this.singleClickButton.click();
        await this.assertVisible(this.page.getByText("You have done a dynamic click"))
    }
}