'use strict';

var hljs = require('highlight.js');
var mousetrap = require('mousetrap');


var DataBindingController = function($log, $scope) {

    hljs.initHighlightingOnLoad();

    $scope.name = '';
    $scope.number = 0;

};

module.exports = [ '$log', '$scope', DataBindingController ];