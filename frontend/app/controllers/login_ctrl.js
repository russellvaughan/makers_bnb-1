angular.module('makersbnb').controller('LoginController', function($scope,auth){	
 $scope.login = function() {
 	if ($scope.loginForm.$valid) {
 		auth.login($scope.user);
 	}
 };
});