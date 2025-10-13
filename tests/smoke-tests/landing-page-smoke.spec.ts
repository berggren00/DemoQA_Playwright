import { test, expect } from "../fixtures/PageFixtures";



const pages = [
  {name: "Forms", url: /\/forms/i },
  {name: "Elements", url: /\/elements/i },
  {name: "Alerts, Frame & Windows", url: /\/alertsWindows/i },
  {name: "Widgets", url: /\/widgets/i },
  {name: "Interactions", url: /\/interaction/i },
  {name: "Book Store Application", url: /\/books/i}
]

for (const p of pages) {
  test(`@smoke go to ${p.name}`, async ({ landingPage, page}) => {
    await landingPage.goToSubPage(p.name);
    await expect(page).toHaveURL(p.url);
  });

}
