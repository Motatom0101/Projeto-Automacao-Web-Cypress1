# 🎯Automação Web - Cypress e Cucumber (Projeto Pratico)📝
[![Cypress](https://api.devicons.dev.br/icon?icons=Cypress%2CJavaScript&size=48&theme=light&perline=30)](https://devicons.dev.br/)

Neste repositório estou desenvolvendo um projeto de automação de teste e2e WEB com Cypress e JavaScript, com base no curso 'Automação Web - Cypress e Cucumber'.

## 📚 Artigos onde documentei o que fiz:

- [Automação Web — Cypress e Cucumber — Parte 4: Automação Web — 1](https://medium.com/@atom.free/automa%C3%A7%C3%A3o-web-cypress-e-cucumber-parte-4-automa%C3%A7%C3%A3o-web-1-b2ff5a1da7ea)
  
   - **Código1**: [**package.json**](https://github.com/Motatom0101/Projeto-Automacao-Web-Cypress1/blob/main/package.json).
     
   - **Código2**: [**cypress.config.js**](https://github.com/Motatom0101/Projeto-Automacao-Web-Cypress1/blob/main/cypress.config.js)
   
Neste artigo vamos iniciar nosso projeto de automação Web com Cypress.
#
- [Automação Web — Cypress e Cucumber — Parte 5: Automação Web — 2](https://medium.com/@atom.free/automa%C3%A7%C3%A3o-web-cypress-e-cucumber-parte-5-automa%C3%A7%C3%A3o-web-2-f392af5d14e3?postPublishedType=initial)

Neste artigo vamos:

 - Criar à **estrutura de diretórios** com a qual trabalharemos:
 - Usaremos **Arrow Functions**, que é uma função moderna do **JS** e menos vermosa;
 - Mapear os **elementos da** página **Home** do PHPTravels;
 - Criar a **classe Elements** da Home;
 - Mapear o Botão Agents (Para poder **acessar a página Login**);
 - Mapear elementos da página Login e criação da **classe page**;
 - Conheceremos a **Função da Diretiva** /// <reference types=”cypress”/>
 - Aprenderemos a instanciar classes;
 - Aprenderemos a criar e acessar métodos das classes;
 - Aprenderemos a usar o ‘cy.wait’ para programar uma espera.

   - **Código1**: [**home_elements.js**](https://github.com/Motatom0101/Projeto-Automacao-Web-Cypress1/blob/main/cypress/e2e/elements/home_elements.js)
     
   - **Código2**: [**login_elements.js**](https://github.com/Motatom0101/Projeto-Automacao-Web-Cypress1/blob/main/cypress/e2e/elements/login_elements.js)
     
   - **Código3**: [**login_pages.js**](https://github.com/Motatom0101/Projeto-Automacao-Web-Cypress1/blob/main/cypress/e2e/pages/login_pages.js)

#
 - [Automação Web — Cypress e Cucumber — Parte 5: Automação Web — 3](https://medium.com/@atom.free/automa%C3%A7%C3%A3o-web-cypress-e-cucumber-parte-5-automa%C3%A7%C3%A3o-web-3-3e34714fbf41?postPublishedType=initial)

Neste artigo veremos:

Finalizaremos nossa automação estruturando o arquivo [login.feature], que contém os cenários escritos em Gherkin. Em seguida, implementaremos o arquivo ‘login_steps.js’, onde importamos a classe ‘LoginPage’ e instanciamos o objeto para orquestrar as ações. Utilizaremos Regex e variáveis para conectar os steps do Gherkin aos métodos da classe, garantindo a reutilização de código. Por fim, executaremos nosso primeiro teste no Cypress com sucesso, validando o fluxo de ponta a ponta.

   - **Código1**: [**login.feature**](https://github.com/Motatom0101/Projeto-Automacao-Web-Cypress1/blob/main/cypress/e2e/features/login.feature)
     
   - **Código2**: [**login_steps.js**](https://github.com/Motatom0101/Projeto-Automacao-Web-Cypress1/blob/main/cypress/e2e/steps/login_steps.js)
   

#
#
## Como Rodar o Projeto:
#
### Pré-requisitos:
 - **Node.js** (versão 18 ou superior recomendada)
 - Gerenciador de pacotes npm (instala junto com o **Node**)
   
Após clonar o repositório com **git clone <url>**, o usuário deve seguir estes passos no terminal:

1. **Instalar as Dependências**
O comando que lê o seu package.json e baixa tudo o que é necessário (Cypress, Cucumber, Preprocessor, etc):
 - **npm install**

2. **Abrir a Interface do Cypress (Modo Interativo)**
Ideal para quem quer ver o navegador abrindo e o Cucumber processando os steps:
 - **npx cypress open**

Após abrir, o usuário deve selecionar E2E Testing e escolher o navegador de preferência.

3. **Executar em Modo "Headless" (Modo Silencioso)**
Muito usado em esteiras de CI/CD ou quando o QA quer apenas o resultado rápido no terminal:
 - **npx cypress run**


#
#
**Design Pattern** implementado: [**POM (Page Object Model)**](https://medium.com/@atom.free/pom-page-object-model-cec4c7d7d6b9)
