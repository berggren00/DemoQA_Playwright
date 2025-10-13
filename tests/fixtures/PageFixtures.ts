import { test as base } from "@playwright/test";
import { LandingPage } from "../../Pages/LandingPage";
import { ElementsPage } from "../../Pages/Elements/ElementsPage";


type Fixtures = {
    landingPage: LandingPage;
    elementsPage: ElementsPage;
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
})

export { expect } from "@playwright/test"