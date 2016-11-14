;(function() {
    var STORAGE_NAME = 'Contacts';

    function defaultImage() {
        return 'img/default.png';// Your default image link;
    }

    function getContactsObject() {
        try {
            var contacts = window.localStorage.getItem(STORAGE_NAME);
            if (contacts === null) {
                return [];
            }
            contacts = JSON.parse(contacts);
            return contacts;
        } catch (e) {
            // throw Error('Error occured while parsing contacts');
            return [];
        }
    }

    function addContact(name, number, img) {
        if (img === undefined) {
            img = defaultImage();
        }
        var contacts = getContactsObject();
        var contact = {
            name: name,
            number: number,
            img: img
        };
        contacts.push(contact);
        updateContactsObject(contacts);
        return true;
    }

    function updateContactsObject(contacts) {
        var contactString = JSON.stringify(contacts);
        window.localStorage.setItem('Contacts', contactString);
    }

    function getContact(tag, value) {
        var contacts = getContactsObject(); // Guaranteed array
        var length = contacts.length;
        for (var i = 0; i < length; i++) {
            if (contacts[i][tag] === value)
                return contacts[i];
        }
        // Contact not found with given tag
        return null;
    }

    function getContactByName(name) {
        return getContact('name', name);
    }

    function getContactByNumber(number) {
        return getContact('number', number);
    }

    function deleteContact(tag, value) {
        var contacts = getContactsObject();
        var length = contacts.length;
        for (var i = 0; i < length; i++) {
            if (contacts[i][tag] === value) {
                contacts.splice(i, 1);
                updateContactsObject(contacts);
                return;
            }
        }
    }

    function deleteContactByName(name) {
        return deleteContact('name', name);
    }

    function deleteContactByNumber(number) {
        return deleteContact('number', number);
    }

    function deleteAllContacts() {
        delete window.localStorage[STORAGE_NAME];
    }

    function updateContact(name, number) {
        // Update the number for contact with given name
        var contacts = getContactsObject();
        var length = contacts.length;
        for (var i = 0; i < length; i++) {
            if (contacts[i].name === name) {
                contacts[i].number = number;
                updateContactsObject(contacts);
                return true;
            }
        }
        return false;
    }

    var PhoneBook = {
        addContact: addContact,
        getContact: getContact,
        getContactsObject: getContactsObject,
        getContactByName: getContactByName,
        getContactByNumber: getContactByNumber,
        deleteContactByName: deleteContactByName,
        deleteContactByNumber: deleteContactByNumber,
        deleteAllContacts: deleteAllContacts,
        updateContact: updateContact,
        updateContactsObject: updateContactsObject
    };
    window.PhoneBook = PhoneBook;
}());
