import Contacts from '../pages/contacts';

class ContactsLib {
    addingNewContact(lastName,firstName,email,cellPhone) {
        Contacts.btnAddressBook().click();
        Contacts.btnCreateNewContact().click();
        Contacts.inputLastName().type(lastName);
        Contacts.inputFirstName().type(firstName);
        Contacts.inputEmail().type(email);
        Contacts.inputCellPhone().type(cellPhone);
        Contacts.btnSaveContact().click();

    }

}

module.exports = new ContactsLib;