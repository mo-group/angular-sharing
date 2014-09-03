'use strict';

var DataBindingController = function($scope) {

    $scope.name = '';
    $scope.number = 0;

};

module.exports = [ '$scope', DataBindingController ];