describe('SpacesDetailsCtrl', function(){
  var ctrl, scope, $httpBackend, routeParams, params
  var data = [{id: 1, name: "lovely space"}, {id: 2, name: "horrid space"}]

  beforeEach(function(){
    module('makersbnb.spacedetails');
    inject(function($controller, $rootScope, _$httpBackend_, $routeParams){
      $httpBackend = _$httpBackend_;
      routeParams = $routeParams
      $httpBackend.expectGET('http://localhost:3000/spaces.json').respond(data)
      scope = $rootScope.$new();
      params = {spaceId: "1"}
      ctrl = $controller('SpacesDetailsCtrl', {$scope:scope, $routeParams: params })
    });
  });

  it('has a attribute called $scope.spaces that returns an object from api', function(){
    $httpBackend.flush()
    expect(scope.spaces).toEqual(data)
    expect(scope.whichItem).toEqual(0)
  })
});
