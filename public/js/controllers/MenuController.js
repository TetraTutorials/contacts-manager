angular.module('sample').controller('MenuController', ['$route', function($route) {
    var _self = this

    _self.$route = $route
}])