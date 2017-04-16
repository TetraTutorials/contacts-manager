angular.module('sample').controller('AddContactController', ['ContactsService', '$location', function(ContactsService, $location) {
    var _self = this

    _self.formData = {
        'name': '',
        'phone': ''
    }

    _self.saveContact = function() {
        ContactsService.saveContact(_self.formData).then(function(result) {
            if(result.success) {
                $location.path('/')
            }
        })
    }
}])