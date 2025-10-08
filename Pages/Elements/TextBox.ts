import { test, expect, Page, Locator } from '@playwright/test'
import { BasePage } from '../BasePage';


export class TextBox extends BasePage {

private readonly name_field: Locator;
    private readonly email_field: Locator;
    private readonly adress_field: Locator;
    private readonly permAdress_field: Locator;
    private readonly textBoxTitle: Locator;

    constructor(page: Page) {
         super(page);
        this.name_field = this.page.locator('#userName');
        this.email_field = this.page.locator('#userEmail');
        this.adress_field = this.page.locator('#currentAddress');
        this.permAdress_field = this.page.locator('#permanentAddress');
        this.textBoxTitle = this.page.getByRole('heading', { name: 'Text Box' })
     }

    async fillTextBox(name: string, email: string, address: string, permAddress: string) {
        await this.assertVisible(this.textBoxTitle)
        await this.name_field.fill(name);
        await this.email_field.fill(email);
        await this.adress_field.fill(address);
        await this.permAdress_field.fill(permAddress);
    }
    }