///<reference types="cypress" />
import produtosPage from "../support/page_objects/produtos.page";

describe('Fluxo de Compra na Loja EBAC', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)
        })
    });
    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('deve adicionar quatro produtos ao carrinho e realizar o checkout', () => {
        cy.fixture('produtos').then(dados => {
            dados.forEach(produto => {
                produtosPage.buscarProduto(produto.nomeProduto)
                produtosPage.addProdutoCarrinho(produto.tamanho, produto.cor, produto.quantidade)
                cy.get('.woocommerce-message').should('contain', produto.nomeProduto)
            });

            cy.visit('checkout'); 
            cy.checkout('Aluno', 'Teste',  'Ebac', 'Ebac Rua dos Bobos', '0', 'São Paulo', '00000-000', '(99) 99999-9999', 'aluno_ebac@teste.com', 'Casa de chão', 'Concordo com os termos');
            cy.get('.woocommerce-notice', { timeout: 5000 }).should('contain', 'Obrigado. Seu pedido foi recebido.')
        });
    });
});