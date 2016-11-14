'use strict';

angular.module('photoSize', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/photo/:id', {
            templateUrl: 'js/photoSizes/photoSizes.html',
            controller: PhotoSizeController
        });
    }]);

function PhotoSizeController($scope, $http, $location, $routeParams) {

    $scope.id = $routeParams.id;
    $http({
        method:"GET",
        url:"http://localhost:8000/photo/"+$scope.id
    }).then(function successCallback(response) {
        $scope.mid=JSON.parse(response.data.sizes);
        $scope.sizes = $scope.mid.sizes;
        $scope.sourceImage = $scope.mid.sizes.size[0].source;
        $scope.sourceImage =setCharAt($scope.sourceImage, $scope.sourceImage.length-5, 'm') ;
        function setCharAt(str,index,chr) {
            if(index > str.length-1) return str;
            return str.substr(0,index) + chr + str.substr(index+1);
        }
    }, function errorCallback(response) {
        console.error(response);
    });
    $scope.getImageBySize = function(size, photo){
        function getSize(photo) {
            return photo.substr(photo.length-5,1) ;
        }
        var s = getSize(photo);
        $location.path("/photo/"+$scope.id+"/size/"+s);
    };
}