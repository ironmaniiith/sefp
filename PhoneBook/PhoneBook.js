;(function() {
    var STORAGE_NAME = 'Contacts',
        arrayTag = '[object Array]',
        slice = Array.prototype.slice,
        splice = Array.prototype.splice,
        toString = Object.prototype.toString;

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

    function updateContactsObject(contacts) {
        if (toString.call(contacts) !== arrayTag) {
            // throw new Error ('Contacts should be an array');
            return;
        }
        var contactString = JSON.stringify(contacts);
        window.localStorage.setItem('Contacts', contactString);
    }

    function addContact(name, number, img) {
        img = (typeof img === undefined) ? defaultImage() : img;
        var contacts = getContactsObject();
        var contact = {
            name: name,
            number: number,
            img: img
        };
        contacts.push(contact);
        try {
            updateContactsObject(contacts);
            return true;
        } catch (e) {
            // throw new Error('Some error occured while saving contacts');
            return false;
        }
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
                splice.call(contacts, i, 1);
                updateContactsObject(contacts);
                return true;
            }
        }
        return false;
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
