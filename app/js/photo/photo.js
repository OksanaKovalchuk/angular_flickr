'use strict';

angular.module('photo', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/photo/:id/size/:heightx:width/:label', {
            templateUrl: 'js/photo/photo.html',
            controller: photoCtrl
        });
    }]);

function photoCtrl($scope, $routeParams) {
    console.log(this);
    console.log($routeParams);
}