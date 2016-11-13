'use strict';

angular.module('main', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'js/main/main.html',
            controller: MainCtrl
        });
    }]);

function MainCtrl($scope, $http) {
    $scope.results = [];
    $scope.search= function(){
        $scope.issearching = true;
        $http({
                method:"GET",
                url: "https://api.flickr.com/services/rest",
                params:{
                    method:"flickr.photos.getRecent",
                    api_key:"cd51c35deb0b194c8c3ccbf6e18954c5",
                    text: $scope.searchText,
                    format: "json",
                    nojsoncallback:1
                }
            }
        ).success(function (data) {
            $scope.results = data;
            $scope.issearching = false;
        }).error(function (error) {
            console.error(error);
        });
    };
    $scope.search();
}