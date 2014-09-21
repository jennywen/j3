'use strict';

/* Controllers */

var dirtyChoreControllers = angular.module('dirtyChoreControllers', []);

dirtyChoreControllers.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.users = [{name:"Bob"}];
  }]);
