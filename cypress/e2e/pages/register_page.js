// Page Object Model for Register Page
/// <reference types="cypress" />

// Impontando classes de elementos
import RegisterElements from "../elements/register_elements";

const registerElements = new RegisterElements

const url = 'https://demo.automationtesting.in/Register.html'

class RegisterPage {

    visitPage() {
        cy.visit(url)
        cy.wait(3000)
    }

    fillNameAndSurname(name, surname) {
        cy.get(registerElements.inputName()).type(name);
        cy.get(registerElements.inputSurname()).type(surname);
    }

    fillContacts(address, email, phone) {
        cy.get(registerElements.inputAddress()).type(address);
        cy.get(registerElements.inputAddressEmail()).type(email);
        cy.get(registerElements.inputPhoneNumber()).type(phone);
    }

    selectRadioGender(gender) {
        cy.get(registerElements.checkRagioGender()).check(gender);
    }

    selectCheckHobbies(hobbies) {
        cy.get(registerElements.checkBoxHobbies()).check(hobbies);
    }

    selectLanguages() {

    };

    SelectSkills(skill) {
        cy.get(registerElements.inputSkills()).select(skill);
    }

    SelectCountry(country) {
        cy.get(registerElements.selectCountry()).select(country);
    }

    selectBirthDay(year, month, day) {
        cy.get(registerElements.selectYear()).select(year);
        cy.get(registerElements.selectMonth()).select(month);
        cy.get(registerElements.selectDay()).select(day);
    }

    fillPassword(pass, confirmPass) {
        cy.get(registerElements.inputPass()).type(pass);
        cy.get(registerElements.inputConfirmPass()).type(confirmPass);
    }
    
    submitRegister() {
        cy.get(registerElements.submitRegister()).click();
    }

} export default RegisterPage;
