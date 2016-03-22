angular.module('makersbnb').controller('LoginController', function($scope,auth){	
 $scope.login = function() {
 	if ($scope.loginForm.$valid) {
 		var promise = auth.login($scope.user);
 		promise.then(success, error);
 	}
 }; 

 var success = function() {};

 var error = function(response) {
  $scope.wrongCredentials = true;
   }; 
});