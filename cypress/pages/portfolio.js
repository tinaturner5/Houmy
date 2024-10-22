

class Portfolio {
    btnPortfolia = () => cy.contains('Portfolia');
    btnAddPortfolio = () => cy.contains('Přidat portfolio');
    inputPortfoliName = () => cy.get('[id="name"]');
    btnSavePortfolioName = ()=> cy.get('[type="submit"]');

    //btnAddFirstProperty = () => cy.get('[type="button"]').find('Přidat nemovitost');
    btnAddProperty = () => cy.contains('Přidat nemovitost');

    //inputPropertyAdress = () => cy.get('[id="react-select-4-live-region"]');
    inputPropertyAddress = () => cy.get('.css-b62m3t-container');
    submitPropertyAddress = () => cy.get('[name="addressData"]');



    //btnSaveAdress = () => cy.get('.flex').find('Pokračovat');
    btnSaveAddress = () => cy.contains('Pokračovat');
    btnSaveAddressFlat = () => cy.contains('Pokračovat');

    //btnSaveAddressFlat = () => cy.get('.flex').find('Pokračovat');
    inputFlatNumber = () => cy.get('[id="unitNumber"]');
    //btnSaveProperty = () => cy.get('.flex').find('Uložit nemovitost');
    btnSaveProperty = () => cy.contains('Uložit nemovitost');


    /*btnPortfolio = () => cy.get('.paragraph').find('Portfolia');
    btnAddPortfolio = () => cy.get('.mr-1.5').find('Přidat portfolio');
    inputPortfolioName = () => cy.get('[id="name"]');
    btnSavePortfolioName = () => = () => cy.get('.flex').find('Přidat portfolio');
    inputAdress = () => cy.get('[id="react-select-4-live-region"]');
    btnSaveAdress = () => cy.get('.flex').find('Pokračovat');
    btnSaveAdressFlat = () => cy.get('.flex').find('Pokračovat');
    inputFlatNr = () => cy.get('[id="unitNumber"]');
    btnSaveHouse = () => cy.get('.flex').find('Uložit nemovitost')
*/
}

module.exports = new Portfolio;