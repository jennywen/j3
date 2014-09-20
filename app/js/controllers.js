'use strict';

/* Controllers */

var dirtyChoreControllers = angular.module('dirtyChoreControllers', []);

dirtyChoreControllers.controller('HomeCtrl', ['$scope', 'User',
  function($scope, User) {
    $scope.users = User.query();
    $scope.orderProp = 'name';
  }]);

dirtyChoreControllers.controller('ProfileCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);

dirtyChoreControllers.controller('LboardCtrl', ['$scope', 
  function($scope) {
    //populate list of objects { person, points}
  }]);
