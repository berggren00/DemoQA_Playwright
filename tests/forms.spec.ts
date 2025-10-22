import { test, expect } from '@playwright/test';
import { FormsPage } from '../Pages/Forms/FormsPage';

test('choose gender', async ({ page }) => {
    const form = new FormsPage(page);
    await form.open();
    await form.chooseGender("Male");
    await form.chooseHobby("Sports")
    await form.chooseSubject("Computer Science");
})

test('choose hobby', async ({ page }) => {
    const form = new FormsPage(page);
    await form.open();
    await form.chooseHobby("Sports")
})

test('choose subject', async ({ page }) => {
    const form = new FormsPage(page);
    await form.open();
    await form.chooseSubject("comp")
})
