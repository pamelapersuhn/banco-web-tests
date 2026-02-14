describe('login', () => {
  beforeEach(() => {
    //arrange
    cy.visit('http://localhost:4000/')
    cy.screenshot('apos-visitar-pagina')
  })


  it('Login com dados válidos deve permitir entrada no sistema', () => {
    //act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.screenshot('Apos preencher dados validos')
    cy.contains('button','Entrar').click() 
    cy.screenshot('Após clicar no botão entrar')

    //assert
    cy.contains('h4','Realizar Transferência').should('be.visible')
  })

  it('Login com dados invalidos deve apresentar mensagem de erro', () => {
    //act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('654321')
    cy.contains('button','Entrar').click() 

    //assert
    cy.get('.toast').should('have.text','Erro no login. Tente novamente.')
    
  })

})