import { test as base } from "@playwright/test";
import { LandingPage } from "../../Pages/LandingPage";
import { ElementsPage } from "../../Pages/Elements/ElementsPage";
import { FormsPage } from "../../Pages/Forms/FormsPage";


type Fixtures = {
    landingPage: LandingPage;
    elementsPage: ElementsPage;
    formsPage: FormsPage;
}

export const test = base.extend<Fixtures>({
    landingPage: async ({ page }, use) => {
        const p = new LandingPage(page)
        await p.open();
        await use(p);
    },
    elementsPage: async ({ page }, use) => {
        await use(new ElementsPage(page));
    },
    formsPage: async ({ page }, use) => {
        const form = new FormsPage(page);
        await form.open();
        await use(form);
    }
})

export { expect } from "@playwright/test"