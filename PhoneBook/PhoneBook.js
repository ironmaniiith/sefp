var STORAGE_NAME = 'Contacts';

function defaultImage() {
    return 'default.png';// Your default image link;
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
    var contactString = JSON.stringify(contacts);
    window.localStorage.setItem('Contacts', contactString);
    return true;
 }
 

function deleteAllContacts() {
    delete window.localStorage[STORAGE_NAME];
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
    var length = contact.length;
    for (var i = 0; i < length; i++) {
        if (contacts[i][tag] === value) {
            contacts.splice(i, 1);
            var contactString = JSON.stringify(contacts);
            window.localStorage.setItem('Contacts', contactString);
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
