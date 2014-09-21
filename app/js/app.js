'use strict';

/* App Module */

var dirtyChoreApp = angular.module('dirtyChore', [
  'ngRoute',
  'dirtyChoreControllers'
]);

dirtyChoreApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'index.html',
        controller: 'HomeCtrl'
      }).
      when('/profile/:userId', {
        templateUrl: 'partials/profile.html',
        controller: 'ProfileCtrl'
      }).
      when('/leaderboard', {
        templateUrl: 'partials/leaderboard.html',
        controller: ''
      }).
      otherwise({
        redirectTo: '/index.html'
      });
  }]);

// home - static
// profile - need ids
// lboard - static
