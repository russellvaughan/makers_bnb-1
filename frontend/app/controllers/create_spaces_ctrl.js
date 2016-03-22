angular.module('makersbnb.createspace', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/views/forms', {
    templateUrl: 'views/forms.html',
    controller: 'CreateSpaceCtrl'
  });
}])

.controller('CreateSpaceCtrl', ["$scope", "$http", "$location", function($scope, $http, $location) {
  $scope.createSpace = function(field, description, price){
    var param = {name: field, description: description, price: price};
    $http.post("http://localhost:3000/spaces.json",
      param ).success(function(data, status){
        $location.path('/spaces/index');
      });
    };
  }]);