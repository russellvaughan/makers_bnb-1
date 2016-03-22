angular.module('makersbnb.spacedetails', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/views/spaces/:spaceId', {
    templateUrl: 'views/spaces/spacedetails.html',
    controller: 'SpacesDetailsCtrl'
  });
}])


.controller('SpacesDetailsCtrl', ["$scope","$http","$routeParams","ViewSpaceService",function($scope, $http, $routeParams, ViewSpaceService) {
  $scope.whichItem = $routeParams.spaceId - 1;
  ViewSpaceService.getSpace().then(function(data) {
  $scope.spaces = data;
   });
}]);
