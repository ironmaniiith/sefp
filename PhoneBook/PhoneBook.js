var STORAGE_NAME = 'Contacts';

function defaultImage() {
    return 'default.png';// Your default image link;
}

function getContactsObject() {
    try {
        var contacts = window.localStorage.getItem(STORAGE_NAME);
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
    contacts = getContactsObject(contacts);
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
 