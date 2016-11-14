'use strict';

angular.module('main', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'js/main/main.html',
            controller: MainCtrl
        });
    }]);
 var MainCtrl = ['$scope', '$http', function($scope, $http) {
     $scope.results = [];
     $scope.search= function(){
         $scope.issearching = true;
         $http({
             method:"GET",
             url:"http://localhost:8000/index/"
         }).then(function successCallback(response) {
             $scope.a=JSON.parse(response.data.photos);
             $scope.photoArray = $scope.a.photos.photo;
         }, function errorCallback(response) {
             console.log(response);
         });

     };
     $scope.search();
 }];