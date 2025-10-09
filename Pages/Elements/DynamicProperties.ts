import { expect } from '@playwright/test'
import { BasePage } from '../BasePage';

export class DynamicProperties extends BasePage {

    getButton(name: string) {
        return this.page.getByRole('button', { name });
    }

    async assertColorChange() {
        const colorButton = this.getButton("Color Change");
        await this.assertVisible(colorButton);
        await expect(colorButton).toHaveClass(/text-danger/, { timeout: 7000});
    }

    async assertButtonEnabled(name: string) {
        const button = this.getButton(name);
        await this.assertVisible(button);
        await expect(button).toBeEnabled( {timeout: 7000} );
    }

    async assertButtonVisible() {
        const invisible = this.getButton("Visible After 5 seconds")
        await expect(invisible).toBeVisible({ timeout: 7000 });
    }
}