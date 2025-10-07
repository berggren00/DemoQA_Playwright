import { test, expect } from "./fixtures/PageFixtures";

test.beforeEach(async ({ landingPage }) => {
  await landingPage.open()
})


test('open forms page', async ({ landingPage, page }) => {
  await landingPage.goToSubPage("Forms");
  await expect(page).toHaveURL(/forms/);
});

test('open elements page', async ({ landingPage, page }) => {
  await landingPage.goToSubPage("Elements");
  await expect(page).toHaveURL(/elements/);
})

test('open alerts page', async ({ landingPage, page }) => {
  await landingPage.goToSubPage("Alerts, Frame & Windows");
  await expect(page).toHaveURL(/alertsWindow/);
})

test('open widgets page', async ({ landingPage, page }) => {
  await landingPage.goToSubPage("Widgets");
  await expect(page).toHaveURL(/widgets/);
})

test('open interactions page', async ({ landingPage, page }) => {
  await landingPage.goToSubPage("Interactions");
  await expect(page).toHaveURL(/interaction/);
})

test('open book store page', async ({ landingPage, page }) => {
  await landingPage.goToSubPage("Book Store Application");
  await expect(page).toHaveURL(/books/);
})
