angular.module('sample').config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/view-contacts.html',
        controller: 'ViewContactsController as ctrl',
        activeLink: 'viewContacts',
        resolve: {
            "contactsData": ['ContactsService', function(ContactsService) {
                return ContactsService.getContacts()
            }]
        }
    })
    .when('/add-contact', {
        templateUrl: 'partials/add-contact.html',
        controller: 'AddContactController as ctrl',
        activeLink: 'addContact'
    })
    .otherwise({
        redirectTo: '/'
    })
}])