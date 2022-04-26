// Definir tipo do arquivo
/// <reference  types="Cypress" />

// Descrever o cenário
describe('Central de Atendimento ao cliente TAT', function(){
    // Escrever o que o cenário faz em si 
    
    // Executa antes de cada teste
    beforeEach(function(){
        // Entrar no endereço da aplicação
        cy.visit('src/index.html')
    })

    // Cenário 1
    it('verificar o título da aplicação', function(){
        // Validar o titulo da página
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    // Cenário 2
    // .only serve para executar somente este teste
    it.only('preencher os campos obrigatórios e envia o formulário', function(){
        // .get faz varios comenados em sequencia 
        // .type digita o texto no campo anterior localizado
        cy.get('#firstName').type('Aline')
        cy.get('#lastName').type('Silva')
        cy.get('#email').type('aline.as385@gmail.com')
        cy.get('#open-text-area').type('Teste')
        // .click irá clicar np bptão anteriormente descrito
        cy.get('button[type="submit"]').click()  // Atenção as aspas!!
    })

})