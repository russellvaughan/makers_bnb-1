angular.module('makersbnb.viewspaces')

.service('SpaceDetailsService', function($http) {
	return {
		getSpace: function() {
			return $http.get('http://localhost:3000/spaces.json').then(function(result) {
				return result.data;

			});
		}  
	}       
})