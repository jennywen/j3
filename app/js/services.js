'use strict';

/* Services */

var dirtyChoreServices = angular.module('dirtyChoreServices', ['ngResource']);

dirtyChoreServices.factory('UserService', ['$resource',
  function($resource){
    return $resource('users.json', {
      query: {method:'GET', isArray:true}
    });
  }]);
