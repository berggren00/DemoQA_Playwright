import { test, expect } from "./fixtures/PageFixtures";
import { FormsPage } from '../Pages/Forms/FormsPage';

test('choose gender', async ({ formsPage }) => {
    await formsPage.chooseGender("Male");
})

test('choose hobby', async ({ formsPage }) => {
    await formsPage.chooseHobby("Sports")
})

test('choose subject', async ({ formsPage }) => {
    await formsPage.chooseSubject("Computer Science", "comp")
})

test('fill form', async ({ formsPage }) => {
    await formsPage.fillName("John", "Lennon");
    await formsPage.fillContactInfo("abdc@cdba.com", "0708374256", "123 address");
})

test('fill dob', async ({ formsPage }) => {
    await formsPage.fillDateOfBirth("22 Nov 2021", "22 nove 21")
})

test('upload image', async ({ formsPage }) => {
    await formsPage.uploadImage("test.txt")
})