describe('Teste PSV', () => {
    beforeEach(() => {
        cy.visit('https://homol.ww2.receita.fazenda.df.gov.br/Account/Login')
   })

   
    it('Login', () => {
        cy.get('#Username').type('03249595160')
        cy.get('#Password').type('123456')
        cy.get('.text-center > .btn').click()
        cy.request({
            method: 'POST',
            url: 'https://homol.ww1.receita.fazenda.df.gov.br/servicos',
            body: {
              name: 'John Doe',
              email: 'johndoe@example.com'
            },
            timeout: 0
          });
          
    })
    
})
