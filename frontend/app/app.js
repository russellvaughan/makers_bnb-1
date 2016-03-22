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
	$routeProvider.otherwise({redirectTo: '/views/spaces/index/'});
}]);
