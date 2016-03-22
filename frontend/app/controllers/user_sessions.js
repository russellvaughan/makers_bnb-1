angular.module('makersbnb')
   .controller('UserSessionsCtrl', function($scope, $auth) {
    console.log('here')
    $scope.handleLoginBtnClick = function() {
      $auth.submitLogin($scope.loginForm)
        .then(function(resp) {
        })
        .catch(function(resp) {
        });
    };
  });