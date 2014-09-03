var angular = require('angular');
var Route = require('./config/Route');
var MainController = require('../controllers/MainController');
var FrontMvcController = require('../controllers/FrontMvcController');
var SpaController = require('../controllers/SpaController');
var FrameworkController = require('../controllers/FrameworkController');
var ProsConsController = require('../controllers/ProsConsController');
var DataBindingController = require('../controllers/DataBindingController');
var ServiceController = require('../controllers/ServiceController');
var DiController = require('../controllers/DiController');

angualr.module('sharing', [ 'ngRoute' ])
    .config(Route)
    .controller('MainController', MainController)
    .controller('FrontMvcController', FrontMvcController)
    .controller('SpaController', SpaController)
    .controller('FrameworkController', FrameworkController)
    .controller('ProsConsController', ProsConsController)
    .controller('DataBindingController', DataBindingController)
    .controller('ServiceController', ServiceController)
    .controller('DiController', DiController);
