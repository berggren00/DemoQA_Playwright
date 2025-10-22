import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../BasePage";

export class FormsPage extends BasePage {

    async open() {
        await super.open("/automation-practice-form");
        await this.assertLoaded(/automation-practice-form/i);
    }
    
    getFirstNameInput(): Locator {
        return this.page.getByPlaceholder("First Name", { exact: true });
    }

    getLastNameInput(): Locator {
        return this.page.getByPlaceholder("Last Name", { exact: true });
    }

    getEmailInput(): Locator {
        return this.page.getByPlaceholder("name@example.com");
    }

    getMobileInput(): Locator {
        return this.page.getByPlaceholder("Mobile Number");
    }

    getDateOfBirth(): Locator {
        return this.page.getByPlaceholder("22 Oct 2025");
    }

    getSubjectsInput(): Locator {
        return this.page.locator('.subjects-auto-complete__value-container').locator('#subjectsInput');
    }

    async chooseGender(option: "Male" | "Female" | "Other"){
        const radio = this.page.getByRole('radio', { name: option, exact: true });
        await this.page.mouse.wheel(0, 100); // scroll down to ensure options are visible
        await expect(radio).toBeVisible();
        await radio.click( { force: true } );
    }

    async chooseHobby(hobby: "Sports" | "Reading" | "Music") {
        await this.page.getByRole('checkbox', { name: hobby }).locator('..').click()    // click on parent "div" to avoid issues & flakiness
    }

    async chooseSubject(subject: string, prefix = subject) {
        const input = this.getSubjectsInput();
        await input.click();
        await input.fill(prefix);
        await input.press('Enter');
    }
}