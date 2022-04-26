// Definir tipo do arquivo
/// <reference  types="Cypress" />

// Descrever o cenário
describe('Central de Atendimento ao cliente TAT', function(){
    // Escrever o que o cenário faz em si 
    it('verificar o título da aplicação', function(){
        // Entrar no endereço da aplicação
        cy.visit('src/index.html')

        // Validar o titulo da página
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')


    })
})