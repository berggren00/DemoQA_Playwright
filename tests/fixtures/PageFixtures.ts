import { test as base } from "@playwright/test";
import { LandingPage } from "../../Pages/LandingPage";

export const test = base.extend <{
    landingPage: LandingPage;
}>({
    landingPage: async ({ page }, use) => {
        await use(new LandingPage(page))
    }
})

export { expect } from "@playwright/test"