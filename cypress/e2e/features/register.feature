Feature: Cadastro de novo usuário
Cadastro de usuários naplataforma 'https://demo.automationtesting.in/Register.html'

    Scenario Outline: "<caso_teste>"
        Given que estou na página de cadastro de usuários
        And insiro o nome "<name>" e 'sobrenome' "<surname>"
        And insiro o endereço de contato "<address>", "<email>" e "<phone>"
        And seleciono o gênero "<gender>" e hobbie "<hobbies>"
        And seleciono a skill "<skill>" e país "<country>"
        And seleciono a data de nascimento "<year>", "<month>" e "<day>"
        And insiro a senha "<password>" e confirmo a senha "<confirm_password>"
        When clico no botão Submit 
        Then tenho meu usuário cadastrado com sucesso

    Examples:
        | caso_teste           | name | surname | address | email          | phone          | gender | hobbies | skill      | country   | year | month   | day | password | confirm_password |
        | Cadrasto com sucesso | João | Silva   | Rua A   | joao@email.com | (11) 9999-9999 | Male   | Movies  | Javascript | Australia | 1990 | January | 15  | 123@abc  | 123@abc          |
       