'use strict';

var Log = function($logProvider) {

    $logProvider.debugEnabled(true);

};

module.exports = [ '$logProvider', Log ];