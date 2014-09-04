'use strict';

require('mousetrap');

var PageController = function($log, $route, $location) {

    var
    toPrevPage = function() {

        console.log('toPrevPage');
    },
    toNextPage = function() {

        console.log('toNextPage');
    };


    mousetrap.bind(',', toPrevPage);
    mousetrap.bind('.', toNextPage);
};

module.exports = [ '$log', '$route', '$location', PageController ];