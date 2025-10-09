import { test, expect } from '@playwright/test'
import { BasePage } from '../../Pages/BasePage'
import { ElementsPage } from '../../Pages/Elements/ElementsPage'
import { TextBox } from '../../Pages/Elements/TextBox'
import { Buttons } from '../../Pages/Elements/Buttons'
import { DynamicProperties } from '../../Pages/Elements/DynamicProperties'

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

test('click functionality', async ({ page }) => {
    const elements = new ElementsPage(page)
    await elements.open();
    await elements.goToListElement("Buttons");
    await elements.assertLoaded(/buttons/i);

    const button = new Buttons(page);
    await button.doubleClick();
    await button.rightClick();
    await button.singleClick();
})

test('enable button', async ({ page }) => {
    const elements = new ElementsPage(page)
    await elements.open();
    await elements.goToListElement("Dynamic Properties");
    await elements.assertLoaded(/dynamic-properties/i);

    const dynamic = new DynamicProperties(page);
    await dynamic.assertButtonEnabled("Will enable 5 seconds")
    await dynamic.assertColorChange();
    await dynamic.assertButtonVisible();
})