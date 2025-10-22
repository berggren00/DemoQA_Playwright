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
    await form.chooseSubject("Computer Science", "comp")
})

test('fill form', async ({ page }) => {
    const form = new FormsPage(page);
    await form.open();

    await form.fillName("John", "Lennon");
    await form.fillContactInfo("abdc@cdba.com", "0708374256", "123 address");
})

test('fill dob', async ({ page }) => {
    const form = new FormsPage(page);
    await form.open();
    await form.fillDateOfBirth("22 Nov 2021", "22 nove 21")
})

