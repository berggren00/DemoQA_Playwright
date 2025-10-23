import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../BasePage";

export class FormsPage extends BasePage {

    async open() {
        await super.open("/automation-practice-form");
        await this.assertLoaded(/automation-practice-form/i);
    }

    // ------------- GETTERS ------------- //
    
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


    get subjectsInput() {
        return {
            input: this.page.locator('#subjectsInput'),
            chosenSubject: this.page.locator('.subjects-auto-complete__multi-value__label')
        }
        }


    // ------------- FUNCTIONS ------------- //

    async chooseGender(option: "Male" | "Female" | "Other"){
        const radio = this.page.getByRole('radio', { name: option, exact: true });
        await this.page.mouse.wheel(0, 100); // scroll down to ensure options are visible
        await expect(radio).toBeVisible();
        await radio.click( { force: true } );
    }

    async fillDateOfBirth(date: string, inputValue = date) {
        const dateInput = this.page.locator('#dateOfBirthInput'); 
        
        await dateInput.click();
        await dateInput.fill(inputValue);
        await dateInput.press('Enter');  
        
        await expect(dateInput).toHaveValue(date, { timeout: 3000 });
    }

    async chooseHobby(hobby: "Sports" | "Reading" | "Music") {
        await this.page.getByRole('checkbox', { name: hobby }).locator('..').click()    // click on parent "div" to avoid issues & flakiness
    }

    async chooseSubject(subject: string, prefix = subject) {
        const input = this.subjectsInput.input;
        await input.click();
        await input.fill(prefix);
        await input.press('Enter');

        const chosenSubject = this.subjectsInput.chosenSubject;
        await expect(chosenSubject).toHaveText(subject);
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