'use strict';

angular.module('flickrApp', [
  'ngRoute',
  'main',
  'photoSize',
  'photo'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.otherwise({redirectTo: '/'});
}]);
