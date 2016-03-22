angular.module('makersbnb.editspace', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/views/spaces/:spaceId/editspace', {
    templateUrl: 'views/spaces/edit_spaces.html',
    controller: 'EditSpaceCtrl'
  });
}])

.controller('EditSpaceCtrl', ["$scope", "$http", "$location","$routeParams", function($scope, $http, $location, $routeParams) {
  $scope.editSpace = function(field){
    routeParams = $routeParams
    var param = JSON.stringify({name: field});
    $http.put("http://localhost:3000/spaces/"+ routeParams.spaceId +".json",
      param).success(function(data, status){
        $location.path('/spaces/index');
      });
    };
  }]);