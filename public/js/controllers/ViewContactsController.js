angular.module('sample').controller('ViewContactsController', ['contactsData', 'ContactsService', function(contactsData , ContactsService) {
    var _self = this

    _self.contacts = contactsData

    _self.deleteContact = function(contact) {
        index = _self.contacts.indexOf(contact)
        ContactsService.deleteContact(_self.contacts[index].id).then(function(result) {
            if(result.success) {
                _self.contacts.splice(index, 1)
            }
        })
    }
}])