'use strict';

angular.module('photoSize', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/photo:id', {
            templateUrl: 'js/photoSizes/photoSizes.html',
            controller: PhotoSizeController
        });
    }]);

function PhotoSizeController($scope) {
    console.log(this);
    $scope.id = 1;
}