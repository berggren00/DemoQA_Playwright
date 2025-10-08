import { test, expect } from '@playwright/test'
import { BasePage } from '../../Pages/BasePage'
import { ElementsPage } from '../../Pages/Elements/ElementsPage'
import { TextBox } from '../../Pages/Elements/TextBox'

test('select list item menu', async ({ page }) => {
    const elements = new ElementsPage(page)
    await elements.open();
    await elements.goToListElement("Text Box");
    await elements.assertLoaded(/text-box/i);
})

test('text box functionality', async ({ page }) => {
    const elements = new ElementsPage(page)
    await elements.open();
    await elements.goToListElement("Text Box");
    await elements.assertLoaded(/text-box/i);

    const textbox = new TextBox(page)
    await textbox.fillTextBox("Andreas", "ab@gmail.com", "address 123", "321 address")
})