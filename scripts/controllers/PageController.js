'use strict';

require('mousetrap');

var PageController = function($log, $route, $location) {

    var
    toPrevPage = function() {

        $log.info('toPrevPage');
    },
    toNextPage = function() {

        $log.info('toNextPage');
    };


    Mousetrap.bind('left' , toPrevPage);
    Mousetrap.bind('right', toNextPage);
};

module.exports = [ '$log', '$route', '$location', PageController ];