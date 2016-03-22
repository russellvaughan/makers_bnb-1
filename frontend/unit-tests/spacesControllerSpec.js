describe('SpacesCtrl', function(){
  var ctrl, scope, $httpBackend
  var data = [{id: 1, name: "lovely space"}, {id: 2, name: "horrid space"}]

  beforeEach(function(){
    module('makersbnb.viewspaces');
    inject(function($controller, $rootScope, _$httpBackend_){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://localhost:3000/spaces.json').respond(data)
      scope = $rootScope.$new();
      ctrl = $controller('SpacesCtrl', {$scope:scope})
    });
  });


  it('has a attribute called $scope.spaces that returns an object from api', function(){
    $httpBackend.flush()
    expect(scope.spaces).toEqual(data)
  })
  it('has an object called $scope.spaces that contains the name of a space from api', function(){
    $httpBackend.flush()
    expect(scope.spaces[0].name).toEqual('lovely space')
  })
});
