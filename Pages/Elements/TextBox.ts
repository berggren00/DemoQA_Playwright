import { Page, Locator } from '@playwright/test'
import { BasePage } from '../BasePage';


export class TextBox extends BasePage {

    private readonly nameField: Locator;
    private readonly emailField: Locator;
    private readonly addressField: Locator;
    private readonly permAddressField: Locator;
    private readonly textBoxTitle: Locator;

    constructor(page: Page) {
         super(page);
        this.nameField = this.page.locator('#userName');
        this.emailField = this.page.locator('#userEmail');
        this.addressField = this.page.locator('#currentAddress');
        this.permAddressField = this.page.locator('#permanentAddress');
        this.textBoxTitle = this.page.getByRole('heading', { name: 'Text Box' })
     }

    async fillTextBox(name: string, email: string, address: string, permAddress: string) {
        await this.assertVisible(this.textBoxTitle)
        await this.nameField.fill(name);
        await this.emailField.fill(email);
        await this.addressField.fill(address);
        await this.permAddressField.fill(permAddress);
    }
    }