'use strict';

angular.module('makersbnb.viewspaces', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/views/spaces/index', {
    templateUrl: 'views/spaces/index.html',
    controller: 'SpacesCtrl'
  });
}])


.controller('SpacesCtrl', ["$scope","$http","ViewSpaceService", function($scope, $http, ViewSpaceService) {
 
  ViewSpaceService.getSpace().then(function(data) {
       $scope.spaces = data;
   });
  

}]);

