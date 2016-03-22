'use strict';
angular.module('makersbnb', [
	'ngRoute',
	'makersbnb.viewspaces',
	'makersbnb.spacedetails',
	'makersbnb.createspace',
	'makersbnb.editspace',
	'makersbnb.deletespace'
	]).

config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/views/login',{
		templateUrl: 'views/login.html',
		controller:'LoginController'
	})
	.otherwise({redirectTo: '/views/spaces/index/'});
}]);
