describe('deleteSpaceCtrl', function(){
  var ctrl, scope, data, location
  beforeEach(function(){
    module('makersbnb.deletespace');
    inject(function($controller, $rootScope, _$httpBackend_, $location, $routeParams){
      $httpBackend = _$httpBackend_;
      routeParams = $routeParams
      $httpBackend.expectDELETE('http://localhost:3000/spaces/1.json').respond(200)
      location = $location
      scope = $rootScope.$new();
      param = {spaceId: "1", name: "upadated space"}
      ctrl = $controller('deleteSpaceCtrl', {$scope:scope,  $routeParams: param });
    });
  });

  it('sends a delete request to the backend', function(){
    scope.deleteSpace()
    $httpBackend.flush()
    expect(location.path()).toBe('/spaces/index')
  });
});