describe('transferencias', () => {
  beforeEach(() => {
    //arrange
    cy.visit('http://localhost:4000/')    
    cy.FazerLoginCredenciaisValidos()
  })

  it('Deve transferir quando informo dados e valores validos', () => {
    //act
    cy.realizarTransferencia('Gil Persuhn', 'Maria', '15')

    //assert
    cy.verificarMensagemNoToast('Transferência realizada!')
  })

  it('Deve apresentar erro quando tentar transferir mais que 5 mil sem o token', () => {
    //act
    cy.realizarTransferencia('Maria', 'Gil Persuhn', '6000')

    //assert
    cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')

  })


})