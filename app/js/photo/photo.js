'use strict';

angular.module('photo', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/photo/:id/size/:label/:index', {
            templateUrl: 'js/photo/photo.html',
            controller: photoCtrl
        });
    }]);

function photoCtrl($scope,$http, $routeParams) {
    /**
     * resolving promise ro get info from the Rest Api due to choosed photo and size
     */
    $http({
        method:"GET",
        url:"http://localhost:8000/photo/"+$routeParams.id+"/size/"+$routeParams.label+"/"+$routeParams.index
    }).then(function successCallback(response) {
        $scope.source = response.data.url;
    }, function errorCallback(response) {
        console.error(response);
    });
}