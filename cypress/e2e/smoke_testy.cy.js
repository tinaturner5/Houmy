import Adresar from "../pages/adresar"

import Portfolio from "../pages/portfolio"

import General from "../library/general_lib"

import {createSession, createStep} from "../support/utilities"

import Contacts from '../pages/contacts';

import {openPage} from "../support/utilities";

import Login from "../pages/login";

const user = Cypress.env("user");                   //meno a heslo nemozem mat uvedene v teste ale v json separatne

describe('Houmy Page', () => {
    beforeEach(() => {
        createSession( "Login", () => Login.login(user.email, user.pwd));
                                                                        //session si musim pomenovat fe "Login"
                                                                        //callback je Fu ktora vola samu seba Login.login


        });
    it('1.Vytvor novy kontakt v adresary', () => {
        createStep('Klik na adresar v menu')
        Adresar.btnAdresar().click();
        createStep('Klik na vytvorit novykontakt')
        Adresar.btncreateNewContact().click();
        createStep('Add last name')
        Adresar.inputLastName().type('Tina');
        createStep('Add first name')
        Adresar.inputFirstName().type('Turner');
        createStep('Add last name')
        Adresar.inputEmail().type('tinka@gmail.com');
        createStep('Save contact')
        Adresar.btnSaveContact().click();

    });

    it('2.Vytvor nove portfolio', () => {
        createStep('Klik na portfolio v menu')
        Portfolio.btnPortfolio().click();
        createStep('Klik na pridat portfolio')
        Portfolio.btnAddPortfolio().click();
        createStep('Add portfolio name')
        Portfolio.inputPortfolioName().type('Tina');        //or how to add random string?
        createStep('Save portfolio')
        Portfolio.btnSavePortfolioName().click();
        createStep('Check if portfolio with this name was generated')
        Portfolio.;
        createStep('')
        Portfolio.

    });

    it.only('3.Add real estate to created portfolio ', () => {
        createStep('Create new portfolio');
        PortfolioLib.createNewPortfolio('Pardubice');
        createStep('Add new address to created portfolio', () => {});
        PortfolioLib.addNewAddressToPortfolio('Wolkerova 2128, Pardubice', '3');

    });



   });

