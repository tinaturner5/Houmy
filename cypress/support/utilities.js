import Login from "../pages/login";



export function createStep(step) {
    cy.step(step)
}                                                                   //helper=utilities je funkcia ktora mi pomaha


export function openPage(page) {
    cy.visit('https://www.houmy.cz/sign-in')
}

//export function createSession(sessionId, sessionFunction, functionParameters) {
 //   cy.session(sessionId, () => sessionFunction(functionParameters));                 //vseobecna funkcia pre session napr si v 1teste spravim session pre zakaznika, druhu pre admina...
//}

export function createSession(sessionId, callback) {
    cy.session(sessionId, callback);                 //vseobecna funkcia pre session napr si v 1teste spravim session pre zakaznika, druhu pre admina...
}


export function generateEmail() {

    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let email = '';
    for (let i = 0; i < 20; i++) {
        email += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    email+= '@gmail.com';
    return email;
}

export function generateRandomNr(lenght) {

    const chars = '1234567890';
    let word = '';
    for (let i = 0; i < lenght; i++) {
        word += chars.charAt(Math.floor(Math.random() * chars.length));
    };
    return word;
}

export function generateRandomWord(lenght) {

    const abc = 'abcdefghijklmnopqrstuvwxyz';
    let string = '';
    for (let i = 0; i < 5; i++) {
        string += abc.charAt(Math.floor(Math.random() * abc.length));
    };
    return string;
}

export function generateRandomAddress () {
    const streets = [
        "Národní třída ",
        "Karlova ulice",
        "Václavské náměstí",
        "Celetná ulice",
        "Pařížská ulice",
        "Malostranské náměstí",
        "Jungmannova ulice",
        "Vodičkova ulice",
        "Karmelitská ulice",
        "Nerudova ulice",
        "Široká ulice",
        "Letenské náměstí",
        "Korunní ulice",
        "Havlíčkova ulice",
        "Dlouhá ulice",
        "Smetanovo nábřeží",
        "Říční ulice",
        "Podolské nábřeží",
        "Jánský vršek",
        "Ovocný trh"
    ];
    return `${streets[Math.floor(Math.random() * streets.length)]} ${generateRandomNr(2)}`;
}

export function generateRandomTown () {
    const towns = [
        "Brno",
        "Ostrava",
        "Plzeň",
        "Liberec",
        "Olomouc",
        "České Budějovice",
        "Hradec Králové",
        "Ústí nad Labem",
        "Pardubice",
        "Zlín",
        "Karlovy Vary",
        "Jihlava",
        "Teplice",
        "Mladá Boleslav",
        "Frýdek-Místek",
        "Kladno",
        "Opava",
        "Tábor",
        "Znojmo",
        "Příbram"
    ];
    const randomTown = towns[Math.floor(Math.random() * towns.length)];
    return randomTown;
}





