'use strict';

var Route = function($routeProvider, $locationProvider) {

    var templateDir = 'templates/';

    $routeProvider
        .when('/', {
            templateUrl: templateDir + 'main.html',
            controller: 'MainController',
            pageIndex: 0
        })
        .when('/front-mvc', {
            templateUrl: templateDir + 'front-mvc.html',
            controller: 'FrontMvcController',
            pageIndex: 1
        })
        .when('/spa', {
            templateUrl: templateDir + 'spa.html',
            controller: 'SpaController',
            pageIndex: 2
        })
        .when('/framework', {
            templateUrl: templateDir + 'framework.html',
            controller: 'FrameworkController',
            pageIndex: 3
        })
        .when('/pros-n-cons', {
            templateUrl: templateDir + 'pros-n-cons.html',
            controller: 'ProsConsController',
            pageIndex: 4
        })
        .when('/data-binding', {
            templateUrl: templateDir + 'data-binding.html',
            controller: 'DataBindingController',
            pageIndex: 5
        })
        .when('/dirty-check', {
            templateUrl: templateDir + 'dirty-check.html',
            pageIndex: 6
        })
        .when('/di', {
            templateUrl: templateDir + 'di.html',
            controller: 'DiController',
            pageIndex: 7
        })
        .when('/module', {
            templateUrl: templateDir + 'module.html',
            pageIndex: 8
        })
        .when('/service', {
            templateUrl: templateDir + 'service.html',
            controller: 'ServiceController',
            pageIndex: 9
        })
        .when('/template', {
            templateUrl: templateDir + 'template.html',
            pageIndex: 10
        })
        .when('/resource', {
            templateUrl: templateDir + 'resource.html',
            pageIndex: 11
        })
        .otherwise({ redirectTo: '/' });

};

module.exports = [ '$routeProvider', '$locationProvider', Route ];