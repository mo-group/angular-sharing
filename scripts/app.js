var angular = require('angular');
var Route = require('./config/Route');

angualr.module('sharing', [ 'ngRoute' ])
    .config(Route);
