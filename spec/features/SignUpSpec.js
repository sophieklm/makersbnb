
var Browser = require("zombie");
var url = "http://localhost:8000";
var browser = new Browser();

describe("signup", function() {

     beforeEach(function(){
          browser.visit(url);
     });

    it("should visit the site and see the signup form", function(next) {
        browser.visit(url, function() {
          expect(browser.success).toBe(true);
          expect(browser.query("input[value='Sign up']")).toBeDefined();
          next();
        });
    });
    it("should be able to sign up with email and password", function(){
        browser.visit(url, function(err) {
          // expect(browser.success).toBe(true);
          browser
            .fill('input[name="email"]', "test@test.com")
            .fill('input[name="password"]', "1234")
            .pressButton('input[value="Sign up"]', function(res) {
              expect(browser.html("body")).toContain("Feel at home, anywhere, anytime");
            });
        });
    });

  //   it("should be able to login with correct credentials", function(next) {
  //     browser.visit(url, function() {
  //     browser
  //         .fill('input[name="email"]', "test@test.com")
  //         .fill('input[name="password"]', "1234")
  //         .pressButton('input[value="Sign up"]', function(res) {
  //     expect(browser.html("body")).toContain("Feel at home, anywhere, anytime");
  // //  expect(browser.query("input[value='Sign up']")).toBeUndefined();
  //     });
  //     next();});
  //    });



});
