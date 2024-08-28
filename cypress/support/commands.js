Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});
Cypress.Commands.add('checkout', (nome, sobrenome, endereco, empresa, numero, cidade, cep, telefone, email, informacao, termo) => {
    cy.get('#billing_first_name').clear().type(nome);
    cy.get('#billing_last_name').clear().type(sobrenome);
    cy.get('#billing_company').clear().type(empresa);
    cy.get('#billing_address_1').clear().type(endereco);
    cy.get('#billing_address_2').clear().type(numero);
    cy.get('#billing_city').clear().type(cidade);
    cy.get('#billing_postcode').clear().type(cep);
    cy.get('#billing_phone').clear().type(telefone);
    cy.get('#billing_email').clear().type(email); 1  
    cy.get('#order_comments').type(informacao)
    cy.get('#terms').type(termo).click()
    cy.get('#place_order').click()
    
    



}); 


