angular.module('sample').service('ContactsService', ['$http', '$q', function($http, $q) {
    var _self = this

    _self.getContacts = function() {
        var defer = $q.defer()

        $http.get('/api/v1/contacts').success(function(data) {
            defer.resolve(data)
        })

        return defer.promise
    }

    _self.deleteContact = function(contactID) {
        var defer = $q.defer()

        $http.delete('/api/v1/contacts/' + contactID).success(function(data) {
            defer.resolve(data)
        })

        return defer.promise
    }

    _self.saveContact = function(formData) {
        var defer = $q.defer()

        $http.post('/api/v1/contacts', formData).success(function(data) {
            defer.resolve(data)
        })

        return defer.promise
    }

    return _self
}])