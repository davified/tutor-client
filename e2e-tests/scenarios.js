'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /roadmap when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/roadmap");
  });


  describe('roadmap', function() {

    beforeEach(function() {
      browser.get('index.html#!/roadmap');
    });


    it('should render roadmap when user navigates to /roadmap', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('exercise', function() {

    beforeEach(function() {
      browser.get('index.html#!/exercise');
    });


    it('should render exercise when user navigates to /exercise', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
