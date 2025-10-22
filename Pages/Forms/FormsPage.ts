import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../BasePage";

export class FormsPage extends BasePage {

    async open() {
        await super.open("/automation-practice-form");
        await this.assertLoaded(/automation-practice-form/i);
    }
    
    get nameInputs() {
        return {
        firstNameInput: this.page.getByPlaceholder("First Name", { exact: true }),
        lastNameInput: this.page.getByPlaceholder("Last Name", { exact: true }),
        };
    }

    get contactInputs() {
        return {
            emailInput: this.page.getByPlaceholder("name@example.com", { exact: true }),
            mobileInput: this.page.getByPlaceholder("Mobile Number"),
            addressInput: this.page.getByPlaceholder("Current Address"),
        }
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

    async fillName(firstName: string, lastName: string) {
        const { firstNameInput, lastNameInput } = this.nameInputs;
        await firstNameInput.fill(firstName);
        await lastNameInput.fill(lastName);
    }

    async fillContactInfo(email: string, number: string, address: string) {
        const inputs = [
            { locator: this.contactInputs.emailInput, value: email },
            { locator: this.contactInputs.mobileInput, value: number },
            { locator: this.contactInputs.addressInput, value: address }
        ];

        for (const { locator, value } of inputs) {
            await locator.fill(value);
            await expect(locator).toHaveValue(value);
        }
    }
}