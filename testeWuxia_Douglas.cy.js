
context('Wuxia Tests', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit('https://www.wuxiaworld.com');
    });

    it('Login', () => {  // Teste de Login
        cy.get('[data-cy="header-button-user-anonymous"]').click(); // abrir drawer clicando na logo de usuário
        cy.get('[data-cy="header-button-login"]').click(); // clicar no botão para ir a página de Login
        cy.get('#Username').type('email@email.com'); // inserir email
        cy.get('#Username').should('value', 'email@email.com'); // verificando se valores conferem
        cy.get('#Password').type('senha'); // inserir senha
        cy.get('#Password').should('value', 'senha'); // verificando se valores conferem
        cy.get(':nth-child(4) > .w-full').click() // efetuar login com as credenciais
    })

    it('Escolher categoria', () => { // Teste de navegação pelas categorias do site
        cy.get('[href="/novels"]').click() // acessar a página das novels
        cy.get('.MuiGrid-grid-md-5 > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root').contains('Chinese').click() // filtrar novels chinesas
        cy.get('.MuiGrid-grid-md-7 > .MuiFormGroup-root > :nth-child(3) > .MuiTypography-root').contains('Completed').click() // filtrar por novels completas
        cy.get(':nth-child(3) > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root').contains('Popular').click() // arrumando por popularidade
        cy.get('strong').contains('A Record of a Mortal’s Journey to Immortality').click({force:true}) // selecionar primeiro resultado dos parametros
        cy.get('a > .font-set-b16').click() // começar a ler
    })
})