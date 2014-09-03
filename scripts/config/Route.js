var MainController = require('../controllers/MainController');
var FrontMvcController = require('../controllers/FrontMvcController');
var SpaController = require('../controllers/SpaController');
var FrameworkController = require('../controllers/FrameworkController');
var ProsConsController = require('../controllers/ProsConsController');
var DataBindingController = require('../controllers/DataBindingController');
var ServiceController = require('../controllers/ServiceController');
var DiController = require('../controllers/DiController');





var Route = function($routeProvider, $locationProvider) {

    var templateDir = 'templates/';

    $routeProvider
        .when('/', {
            templateUrl: 'main.html',
            controller: 'MainController'
        })
        .when('/front-mvc', {
            templateUrl: 'front-mvc.html',
            controller: 'FrontMvcController'
        })
        .when('/spa', {
            templateUrl: 'spa.html',
            controller: 'SpaController'
        })
        .when('/framework', {
            templateUrl: 'framework.html',
            controller: 'FrameworkController'
        })
        .when('/pros-n-cons', {
            templateUrl: 'route.html',
            controller: 'RouteCtrl'
        })
        .when('/data-binding', {
            templateUrl: 'route.html',
            controller: 'RouteCtrl'
        })
        .when('/route', {
            templateUrl: 'route.html',
            controller: 'RouteCtrl'
        })
        .otherwise({ redirectTo: '/' })

};

module.exports = Route;