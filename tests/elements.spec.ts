import { test, expect } from "./fixtures/PageFixtures";


test.beforeEach(async ({ elementsPage }) => {
    await elementsPage.open()
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

test('add new webtables form', async ({ elementsPage }) => {
    const webtables = await elementsPage.goToWebTables();
    await webtables.fillRegForm("dynamo", "johnson", "abcd@dcba.com", "21", "38000", "tech");
})

test('search webtables', async ({ elementsPage }) => {
    const webtables = await elementsPage.goToWebTables();
    await webtables.assertSearchResults("al");
})

test('edit department in webtables', async ({ elementsPage }) => {
    const webtables = await elementsPage.goToWebTables();
    await webtables.editPersonDepartment("Alden", "marketing")
})
