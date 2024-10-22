import Adresar from "../pages/adresar"

import Portfolio from "../pages/portfolio"


class Login {
    inputLogin = ()=> cy.get('[name="email"]');
    inputPassword = ()=> cy.get('[name="password"]');
    btnLogin = ()=> cy.get('.relative').last();

    login(username, password) {
        cy.clearCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        cy.visit('https://www.houmy.cz/sign-in');
        this.inputLogin().type(username);                   //this. - pracujem uz v ramci class Login tak pouzivam toto a nie General.inputLogin...
        this.inputPassword().type(password);                //puzdrenie funkcie - ked som vnutri takpouzivam this.
        this.btnLogin().click();

    }
}

module.exports = new Login();