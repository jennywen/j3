'use strict';

/* Controllers */

var dirtyChoreControllers = angular.module('dirtyChoreControllers', []);

/* Home Page */
dirtyChoreControllers.controller('HomeCtrl', ['$rootScope', 'UserService', 
  function($rootScope, UserService) {
    $rootScope.showProfileView = false;
    $rootScope.users = [{
      id: 0,
      name: "Jenny",
      score: 0,
      currentChore: [0, -1]
    },
    {
      id: 1,
      name: "Juliet",
      score: 0,
      currentChore: [1, -1]
    },
    {
      id: 2,
      name: "Jad",
      score: 0,
      currentChore: [2, -1]
    },
    {
      id: 3,
      name: "James",
      score: 0,
      currentChore: [3, -1]
    },
    {
      id: 0,
      name: "Jarrett",
      score: 0,
      currentChore: [4, -1]
    }];

    // var promise = new Promise(function(resolve) {
    //   UserService.success(function(data) {
    //     console.log(data);
    //     resolve(data);
    //   });
    // });

    // promise.then(function(result){
    //   $rootScope.users = result;
    // });

    $rootScope.changeProfileView = function(userId){
      $rootScope.currentUserId = userId; // available to other controllers
      $rootScope.showProfileView = true;
    };
}]);

/* Profile Page */
dirtyChoreControllers.controller('ProfileCtrl', ['$rootScope', function($rootScope) {

  $rootScope.changeLeaderBdView = function(user){
     $rootScope.showLeaderboardView = true;
     $rootScope.showProfileView = false;
    
  };
}]);

/* Leaderboard Page */
dirtyChoreControllers.controller('LeaderboardCtrl', ['$rootScope', function($rootScope) {
  $rootScope.varb = '';
}]);
