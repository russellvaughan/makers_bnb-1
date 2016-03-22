angular.module('makersbnb').controller('AdminController',function($http){
	$http.get('http://localhost:3000/api/login')
});