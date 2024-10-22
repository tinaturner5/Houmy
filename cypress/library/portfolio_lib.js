import Portfolio from '../pages/portfolio';

class Portfolio_lib {
    createNewPortfolio(porfolioName) {
        Portfolio.btnPortfolia().click();
        Portfolio.btnAddPortfolio().click();
        Portfolio.inputPortfoliName().type(porfolioName);
        Portfolio.btnSavePortfolioName().click({force: true});
    }

    addNewAddressToPortfolio(address,flatNumber) {
        Portfolio.btnPortfolia().click();
        Portfolio.btnAddProperty().click({force: true});
        Portfolio.inputPropertyAddress().type(address);
        //Portfolio.submitPropertyAddress().click();
        Portfolio.btnSaveAddress().click();
        Portfolio.btnSaveAddressFlat().click();
        Portfolio.inputFlatNumber().type(flatNumber);
        Portfolio.btnSaveProperty().click();
    }
}

module.exports = new Portfolio_lib;