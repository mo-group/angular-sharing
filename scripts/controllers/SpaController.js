'use strict';

var hljs = require('highlight.js');
var mousetrap = require('mousetrap');

var SpaController = function($log) {

    hljs.initHighlightingOnLoad();

};

module.exports = [ '$log', SpaController ];