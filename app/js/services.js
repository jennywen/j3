'use strict';

/* Services */

var dirtyChoreServices = angular.module('dirtyChoreServices', ['ngResource']);

dirtyChoreServices.factory('UserService', function($http) {
	return $http.get('users.json');
});
