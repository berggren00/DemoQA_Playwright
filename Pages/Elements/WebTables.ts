import { test, expect, Page, Locator } from '@playwright/test'
import { BasePage } from '../BasePage';

export class WebTables extends BasePage {
    private readonly submitButton: Locator;
    private readonly addButton: Locator;
    private readonly searchBar: Locator;

    constructor(page: Page) {
        super(page);
        this.submitButton = this.page.locator('#submit');
        this.addButton = this.page.getByRole('button', { name: "Add" });
        this.searchBar = this.page.getByRole('textbox', { name: "Type to search"})
    }
    
    getInputFields(placeholder: string): Locator {
        return this.page.locator('#userForm .row').getByPlaceholder(placeholder, { exact: true });
    }

    async fillRegForm(name: string, lastname: string, email: string, age: string, salary: string, department: string) {
        await this.assertVisible(this.addButton);
        await this.addButton.click();
        await this.getInputFields("First Name").fill(name);
        await this.getInputFields("Last Name").fill(lastname);
        await this.getInputFields("name@example.com").fill(email);
        await this.getInputFields("Age").fill(age);
        await this.getInputFields("Salary").fill(salary);
        await this.getInputFields("Department").fill(department);
        await this.submitButton.click();
    }

    async assertSearchResults(searchTerm: string) {
        await this.assertVisible(this.searchBar);
        await this.searchBar.fill(searchTerm).then(async () => {
            const row = this.page.locator('.rt-tbody .rt-tr-group').first();
            await this.assertVisible(row);
            await expect(row).toContainText(searchTerm);
        });  
    }

    async editPersonDepartment(person: string, department: string) {
        const row = this.page.locator('.rt-tr-group').filter( { hasText: person })
        const editButton = row.locator('[id^="edit-record-"]');
        await this.assertVisible(row)
        await editButton.click();
        await this.getInputFields("Department").fill(department);
        await this.submitButton.click();
        await expect(row).toContainText(department);
    }

    async removePerson(person: string) {
        const row = this.page.locator('.rt-tr-group').filter( { hasText: person })
        const editButton = row.locator('[id^="delete-record-"]');
        await expect(editButton).toBeVisible();
        await editButton.click();
        await expect(row).toBeHidden();
    }
}
