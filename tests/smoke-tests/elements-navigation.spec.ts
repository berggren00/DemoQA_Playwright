import { test, expect } from "../fixtures/PageFixtures";
import { ElementsPage } from '../../Pages/Elements/ElementsPage'
import { TextBox } from '../../Pages/Elements/TextBox'
import { Buttons } from '../../Pages/Elements/Buttons'
import { DynamicProperties } from '../../Pages/Elements/DynamicProperties'
import { beforeEach } from "node:test";

test.beforeEach(async ({ elementsPage }) => {
    await elementsPage.open()
})

test('select list item menu', async ({ elementsPage }) => {
    await elementsPage.goToListElement("Text Box");
    await elementsPage.assertLoaded(/text-box/i);
})

test('text box functionality', async ({ elementsPage }) => {
    const textbox = await elementsPage.goToTextbox();
    await textbox.fillTextBox("Andreas", "ab@gmail.com", "address 123", "321 address")
})

test('click functionality', async ({ elementsPage }) => {
    const buttons = await elementsPage.goToButtons();
    await buttons.doubleClick();
    await buttons.rightClick();
    await buttons.singleClick();
})

test('enable button', async ({ elementsPage }) => {
    const dynamic = await elementsPage.goToDynamicProp();
    await dynamic.assertButtonEnabled("Will enable 5 seconds")
    await dynamic.assertColorChange();
    await dynamic.assertButtonVisible();
})

// TODO: Refactor testsuite with fixtures to prevent repeating/copying!!
// TODO: Refactor testsuite with fixtures to prevent repeating/copying!!
// TODO: Refactor testsuite with fixtures to prevent repeating/copying!!
// TODO: Refactor testsuite with fixtures to prevent repeating/copying!!
// TODO: Refactor testsuite with fixtures to prevent repeating/copying!!