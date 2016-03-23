'use strict';
angular.module('makersbnb', [
	'ngRoute',
	'makersbnb.viewspaces',
	'makersbnb.spacedetails',
	'makersbnb.createspace',
	'makersbnb.editspace',
	'makersbnb.deletespace'
	])

.factory('authInterceptor', function($q, $location) {
	return {
	request: function(config){
		config.headers = config.headers || {};
			if(localStorage.auth_token) {
				config.headers.token = localStorage.auth_token;
			}	
			return config;
	},
	responseError: function(response) {
	if (response.status === 401) {
		$location.path('views/login');
		}
	return $q.reject(response);
 }
}
})

.config(function($httpProvider) {
	$httpProvider.interceptors.push('authInterceptor');
})

.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/views/login',{
		templateUrl: 'views/login.html',
		controller:'LoginController'
	})
	.when('/views/admin', {
	templateUrl: 'views/admin.html',
		controller:'AdminController'
	})
	.otherwise({redirectTo: '/views/spaces/index/'});
}]);
