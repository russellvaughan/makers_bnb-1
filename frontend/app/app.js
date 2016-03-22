'use strict';
angular
	.module('makersbnb', [
	'ngRoute',
	'ng-token-auth',
	'makersbnb.viewspaces',
	'makersbnb.spacedetails',
	'makersbnb.createspace',
	'makersbnb.editspace',
	'makersbnb.deletespace',
	])
	.config(function ($routeProvider, $authProvider) {
    $routeProvider
      .when('/views/user_sessions/new', {
        templateUrl: 'views/user_sessions/new.html',
        controller: 'UserSessionsCtrl'
      })
      .otherwise({
        redirectTo: 'views/spaces/index'
      });
      $authProvider.configure({
            apiUrl: 'http://localhost:3000/'
        });
    })
      .run(['$rootScope', '$location', function($rootScope, $location) {
   			$rootScope.$on('auth:login-success', function() {
   			$location.path('/');
  });
}]);
 