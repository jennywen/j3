'use strict';

/* App Module */

var dirtyChoreApp = angular.module('dirtyChoreApp', [
  'ngRoute',
  'dirtyChoreControllers',
  'dirtyChoreServices'
]);

dirtyChoreApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'index.html',
        controller: 'HomeCtrl'
      }).
      when('/profile', {
        templateUrl: 'partials/profile.html',
        controller: 'ProfileCtrl'
      }).
      when('/leaderboard', {
        templateUrl: 'partials/leaderboard.html',
        controller: 'LboardCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

// home - static
// profile - need ids
// lboard - static
