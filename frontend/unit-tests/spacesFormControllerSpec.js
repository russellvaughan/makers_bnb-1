describe('CreateSpaceCtrl', function(){
  var ctrl, scope, data, params,location
  beforeEach(function(){
    module('makersbnb.createspace');
    inject(function($controller, $rootScope, _$httpBackend_, $location){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectPOST('http://localhost:3000/spaces.json', params).respond(200)
      location = $location
      scope = $rootScope.$new();
      ctrl = $controller('CreateSpaceCtrl', {$scope:scope});
      params = {"name":"new space"}
    });
  });

  it('sends a post to the backend', function(){
    scope.createSpace()
    $httpBackend.flush()
    expect(location.path()).toBe('/spaces/index')
  })

});
