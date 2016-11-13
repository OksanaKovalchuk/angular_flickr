'use strict';

angular.module('photo', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/photo-with-size', {
            templateUrl: 'js/photo/photo.html',
            controller: photoCtrl
        });
    }]);

function photoCtrl($scope) {
    console.log(this);
}