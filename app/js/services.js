'use strict';

/* Services */

var choreServices = angular.module('choreServices', ['ngResource']);

choreServices.factory('User', ['$resource',
  function($resource){
    return $resource('profile/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
