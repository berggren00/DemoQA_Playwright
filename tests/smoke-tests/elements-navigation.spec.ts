import { test, expect } from "../fixtures/PageFixtures";
import { ElementsPage } from '../../Pages/Elements/ElementsPage'
import { TextBox } from '../../Pages/Elements/TextBox'
import { Buttons } from '../../Pages/Elements/Buttons'
import { DynamicProperties } from '../../Pages/Elements/DynamicProperties'
import { beforeEach } from "node:test";

test.beforeEach(async ({ elementsPage }) => {                 // Skapa array med list elements -> loopa igenom för varje val
    await elementsPage.open()
})


const items = [
{ name: "Text Box", regex: /text-box/i },
{ name: "Check Box", regex: /checkbox/i },
{ name: "Radio Button", regex: /radio-button/i },
{ name: "Web Tables", regex: /webtables/i },
{ name: "Buttons", regex: /buttons/i },
{ name: "Links", regex: /links/i },
{ name: "Broken Links - Images", regex: /broken/i },
{ name: "Upload and Download", regex: /upload-download/i },
{ name: "Dynamic Properties", regex: /dynamic-properties/i }
]

for (const item of items) {
    test(`@smoke can open ${item.name}`, async ({ elementsPage }) => {
        await elementsPage.goToListElement(item.name);
        await elementsPage.assertLoaded(item.regex)
    })
}