'use strict';

var Route = function($routeProvider, $locationProvider) {

    var templateDir = 'templates/';

    $routeProvider
        .when('/', {
            templateUrl: templateDir + 'main.html',
            controller: 'MainController'
        })
        .when('/front-mvc', {
            templateUrl: templateDir + 'front-mvc.html',
            controller: 'FrontMvcController'
        })
        .when('/spa', {
            templateUrl: templateDir + 'spa.html',
            controller: 'SpaController'
        })
        .when('/framework', {
            templateUrl: templateDir + 'framework.html',
            controller: 'FrameworkController'
        })
        .when('/pros-n-cons', {
            templateUrl: templateDir + 'pros-n-cons.html',
            controller: 'ProsConsController'
        })
        .when('/data-binding', {
            templateUrl: templateDir + 'data-binding.html',
            controller: 'DataBindingController'
        })
        .when('/service', {
            templateUrl: templateDir + 'service.html',
            controller: 'ServiceController'
        })
        .when('/di', {
            templateUrl: templateDir + 'di.html',
            controller: 'DiController'
        })
        .otherwise({ redirectTo: '/' });

};

module.exports = [ '$routeProvider', '$locationProvider', Route ];