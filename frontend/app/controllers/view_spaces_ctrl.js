'use strict';

angular.module('makersbnb.viewspaces', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/views/spaces/index', {
    templateUrl: 'views/spaces/index.html',
    controller: 'SpacesCtrl'
  });
}])


.controller('SpacesCtrl', ["$scope","$http","ViewSpaceService","auth","$location",function($scope, $http, ViewSpaceService, auth, $location) {

  ViewSpaceService.getSpace().then(function(data) {
       $scope.spaces = data;
   });

  	$scope.isLoggedIn = auth.isLoggedIn;
  
  	$scope.logout = function(){
  		var promise = auth.logout();
  		promise.then(function(){
  			localStorage.removeItem('auth_token');
  			$location.path('views/login');
  		});
  	};

}]);

