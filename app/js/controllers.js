'use strict';

/* Controllers */

var dirtyChoreControllers = angular.module('dirtyChoreControllers', []);

/* Home Page */
dirtyChoreControllers.controller('HomeCtrl', ['$rootScope', 'UserService', 
  function($rootScope, UserService) {
    $rootScope.showLeaderboardView = false;
    $rootScope.showProfileView = false;
    $rootScope.users = [{
      id: 0,
      name: "Jenny",
      score: 3,
      currentChore: [0, -1]
    },
    {
      id: 1,
      name: "Juliet",
      score: 3,
      currentChore: [1, -1]
    },
    {
      id: 2,
      name: "Jad",
      score: 3,
      currentChore: [2, -1]
    },
    {
      id: 3,
      name: "Maddy",
      score: 7,
      currentChore: [3, -1]
    },
    {
      id: 4,
      name: "Garrett",
      score: 5,
      currentChore: [4, -1]
    }];

    $rootScope.chores = [
    {
      name: "Garbage",
      description: "Take out trash and recycling when necessary."
    },
    {
      name: "Bathroom",
      description: "Clean toilet bowl, mirrors and surfaces."
    },
    {
      name: "Floors",
      description: "Sweep and vacuum."
    },
    {
      name: "Countertops",
      description: "Wipe down with clean towel."
    },
    {
      name: "Dishes",
      description: "Run it every night and empty in morning."
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
  var d = new Date();
  var month = d.getMonth();

  $rootScope.changeLeaderBdView = function(user){
     $rootScope.showLeaderboardView = true;
     $rootScope.showProfileView = false;
  };
}]);

/* Leaderboard Page */
dirtyChoreControllers.controller('LeaderboardCtrl', ['$rootScope', function($rootScope) {
  $rootScope.varb = '';
}]);
