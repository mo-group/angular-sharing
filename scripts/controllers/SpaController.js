'use strict';

var hljs = require('highlight');
var mousetrap = require('mousetrap');

var SpaController = function($log) {

    hljs.initHighlightingOnLoad();

};

module.exports = [ '$log', SpaController ];