function ContactController() {
    this.contacts = [{
        name: 'Bob',
        phone: '0123493330'
    },{
        name: 'Tim',
        phone: '3934203242'
    },{
        name: 'Ross',
        phone: '0684059433'
    }];

    this.addContact = function () {
            this.contacts.push({
            name: 'New Contact',
            phone: 'Phone Number'
        });
    }
}

angular
    .module('app')
    .controller('ContactController', ContactController);
