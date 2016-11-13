'use strict';

angular.module('photoSize', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/photo/:id', {
            templateUrl: 'js/photoSizes/photoSizes.html',
            controller: PhotoSizeController
        });
    }]);

function PhotoSizeController($scope, $http, $location, $routeParams) {

    console.log($location);
    $scope.id = $routeParams.id;
    $scope.getSizeOfImage = function(id){
        $http({
            method:"GET",
            url: "https://api.flickr.com/services/rest",
            params:{
                method:"flickr.photos.getSizes",
                api_key:"cd51c35deb0b194c8c3ccbf6e18954c5",
                photo_id: id,
                text: $scope.searchText,
                format: "json",
                nojsoncallback:1
            }
        }).success(function (data) {
            $scope.sizes = data.sizes;
            $scope.sourceImage = $scope.sizes.size[1].source;
            console.log(data);
        })
    };
    $scope.getSizeOfImage($scope.id);
    $scope.send = function(url){
      // $routeParams.source = url;
        console.log($routeParams);
    };
    $scope.getImageBySize = function(size, photo){
        console.log(size);
        console.log(photo);
        $location.path("/photo/"+$scope.id+"/size/"+size.height+"x"+size.width+"/"+size.label[0]);

    };
}