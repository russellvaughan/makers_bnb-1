angular.module('makersbnb.deletespace', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/views/spaces/:spaceId/deletespace', {
    templateUrl: 'views/spaces/edit_spaces.html',
    controller: 'deleteSpaceCtrl'
  });
}])

.controller('deleteSpaceCtrl', ["$scope", "$http", "$location","$routeParams", function($scope, $http, $location, $routeParams) {
  routeParams = $routeParams
  $scope.deleteSpace = function(){
    $http.delete("http://localhost:3000/spaces/"+ routeParams.spaceId +".json").success(function(data, status){
      $location.path('/spaces/index');
    });
  };
}]);