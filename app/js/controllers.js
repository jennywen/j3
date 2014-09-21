'use strict';

/* Controllers */

var dirtyChoreControllers = angular.module('dirtyChoreControllers', []);

/* Home Page */
dirtyChoreControllers.controller('HomeCtrl', ['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.users = [{id: 0, name:"Bob"}, {id: 6, name:"Joe"}];

    $rootScope.changeView = function(userId){
      $rootScope.currentUserId = userId; // available to other controllers
  };
}]);

/* Profile Page */
dirtyChoreControllers.controller('ProfileCtrl', ['$rootScope', function($rootScope) {

  $rootScope.buttonHandler = function(userId){
    var users = $rootScope.users;

  };
}]);

/* Leaderboard Page */
dirtyChoreControllers.controller('LeaderboardCtrl', ['$rootScope', function($rootScope) {
  $rootScope.varb = '';
}]);
