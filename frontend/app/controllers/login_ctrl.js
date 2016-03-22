angular.module('makersbnb').controller('LoginController', function($scope,auth,$location ){	
 $scope.login = function() {
 	if ($scope.loginForm.$valid) {
 		var promise = auth.login($scope.user);
 		promise.then(success, error);
 	}
 }; 

 var success = function(response) {
 	localStorage.setItem('auth_token', response.data.auth_token);
 	$location.path('/space/index ')
 };

 var error = function(response) {
  $scope.wrongCredentials = true;
   }; 
});