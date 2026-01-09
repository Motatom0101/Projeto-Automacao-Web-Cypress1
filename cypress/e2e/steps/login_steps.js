/// <reference types="cypress" />
// Importação da classe
import LoginPage from "../pages/login_pages";
// Instanciação da do objeto apartir da classe
const loginPage = new LoginPage

// Definição dos passos do cenario
Given(/^eu acesse a página home da aplicação PHPTravels$/, () => {
	loginPage.accessHomePage(); // Chamada do método acessar home page
});

When(/^eu inserir meu email "([^"]*)" e minha senha "([^"]*)"$/, (email, password) => {
	console.log(email, password);
	
    loginPage.accessLoginPage(); // Chamada do método acessar login page

    loginPage.fillLoginInfo(email, password); // Chamada do método preencher dados na login page
});

When(/^eu clicar no botão de entrar$/, () => {
	loginPage.submitLogin(); // Chamada do método submeter login
});

Then(/^tenho meu acesso "([^"]*)"$/, (mensagem) => {
	console.log(mensagem);
	
});
