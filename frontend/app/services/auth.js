angular.module('makersbnb').service('auth', function($http) {
	this.login = function(user) {
		return $http.post('http://localhost:3000/api/login', {email: user.email, password: user.password});
	};

	this.logout = function(){
		return $http.delete('http://localhost:3000/api/logout.json');
	}
	this.isLoggedIn = function(){
		return (localStorage.getItem('auth_token')) ? true: false;
 };
});