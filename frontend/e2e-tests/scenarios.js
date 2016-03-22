'use strict';
describe('makersbnb', function() {
  it('should automatically redirect to spaces/index when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/spaces/index");
  });

  describe('/spaces/index', function() {

    beforeEach(function() {
      browser.get('index.html');
      element(by.id("create_space")).click();
      element(by.id("name")).sendKeys("1 Makers");
      element(by.id("submit")).click("Submit");
    });

    it('should render space name when user navigates to the index', function() {

      expect(element.all(by.css('[ng-view] p')).getText()).
      toMatch(/1 Makers/);
    });

  });

  describe('/spaces/index', function() {

    beforeEach(function() {
      browser.get('index.html');
      element(by.id("create_space")).click("Create Space")
    });

    it('should have a form', function(){
      expect(element(by.id("spaces_form")).isPresent()).toBe(true);
    });

    it('should allow user to input space name', function(){
      element(by.id("name")).sendKeys("Makers");
      element(by.id("submit")).click("Submit");
      expect(element.all(by.css('[ng-view] p')).getText()).
      toMatch(/Makers/)
    });
  });
  
  describe('/spaces/index', function() {

    beforeEach(function() {
      browser.get('index.html');
      element(by.id("create_space")).click("Create Space")
    });

    it('should allow user to input a description', function(){
      element(by.id("name")).sendKeys("Makers");
      element(by.id("description")).sendKeys("lovely!");
      element(by.id("submit")).click("Submit");
      expect(element.all(by.css('[ng-view] p')).getText()).
      toMatch(/lovely!/)
    });
  });

  describe('/spaces/index', function(){

    beforeEach(function() {

      browser.get('index.html');
      element(by.id("create_space")).click();
      element(by.id("name")).sendKeys("Ronin");
      element(by.id("submit")).click("Submit");
    });

    it('updates space names', function(){
      element(by.id("Ronin")).click();
      element(by.id("Edit")).click();
      element(by.id("name")).sendKeys("Newtest");
      element(by.id("submit")).click("Submit");
      expect(element(by.id("Newtest")).getText()).toMatch(/Newtest/)
    })
  });
});

describe('/spaces/index', function(){

  beforeEach(function() {

    browser.get('index.html');
    element(by.id("create_space")).click();
    element(by.id("name")).sendKeys("SpaceToDelete");
    element(by.id("submit")).click("Submit");
  });

  it('updates space names', function(){
    element(by.id("SpaceToDelete")).click();
    element(by.id("Delete")).click();
    expect(element(by.id("SpaceToDelete")).isPresent()).toBe(false);
  })
});

describe('/spaces/index', function() {

  beforeEach(function() {
    browser.get('index.html');
    element(by.id("create_space")).click("Create Space")
  });

  it('should allow user to input a price', function(){
    element(by.id("name")).sendKeys("Makers");
    element(by.id("description")).sendKeys("lovely!");
    element(by.id("price")).sendKeys("250!");
    element(by.id("submit")).click("Submit");
    expect(element.all(by.css('[ng-view] p')).getText()).
    toMatch(/250/)
  });
});




