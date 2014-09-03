'use strict';

require('highlight');


var DataBindingController = function($scope) {

    hljs.initHighlightingOnLoad();

    $scope.name = '';
    $scope.number = 0;

};

module.exports = [ '$scope', DataBindingController ];