class Contacts {
    //btnAddressBook = () => cy.get('[href="/contact"]');
    btnAddressBook = () => cy.contains('Adresář');
    //btnCreateNewContact = () => cy.get('.mr-1.5').find('Vytvořit nový kontakt');
    btnCreateNewContact = () => cy.contains('Vytvořit nový kontakt');

    inputLastName = () => cy.get('[name="lastName"]');
    inputFirstName = () => cy.get('[id="firstName"]');
    inputEmail = () => cy.get('[id="email"]');
    inputCellPhone = () => cy.get('[name="phone"]');
    btnSaveContact = () => cy.contains('Uložit');
}
module.exports = new Contacts;