'use strict';

// Declare app level module which depends on views, and components
angular.module('F1FeederApp', [
  'F1FeederApp.controllers',
  'F1FeederApp.services'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
