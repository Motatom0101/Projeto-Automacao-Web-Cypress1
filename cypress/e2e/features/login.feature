Feature: Login
Funcionalidade para realizar variados logins no sistema PHPTravels

    Scenario Outline: "<cenario>"
        Given eu acesse a página home da aplicação PHPTravels
        When eu inserir meu email "<email>" e minha senha "<senha>"
        And eu clicar no botão de entrar
        Then tenho meu acesso "<mensagem>"

        Examples:
            | cenario           | email               | senha    | mensagem              |
            | Login com sucesso | user@phptravels.com | demouser | concedido com sucesso |
  