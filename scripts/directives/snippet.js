'use strict';

var hljs = require('highlight.js');

var snippet = function ($timeout, $interpolate) {

    return {
        restrict: 'E',
        template: '<pre><code ng-transclude></code></pre>',
        replace: true,
        transclude: true,
        link: function (scope, elm) {
            var tmp = $interpolate(elm.find('code').text())(scope);
            elm.find('code').html(hljs.highlightAuto(tmp).value);
        }
    };
};

module.exports = [ '$timeout', '$interpolate', snippet ];