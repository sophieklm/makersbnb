
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
        next();});
    });
    // it("should be able to sign up with email and password", function(next){
    //     browser.visit(url, function() {
    //     browser
    //         .fill('email', 'test@test.com')
    //         .fill('password', '1234');
    //     expect(browser.pressButton('Sign up')).toBeDefined();
    //     next();});
    // });

    it("should be able to login with correct credentials", function(next) {
     browser
     .fill('input[name="email"]', "test@test.com")
     .fill('input[name="password"]', "1234")
     .pressButton('input[value="Sign up"]', function(res) {
         expect(browser.html("body")).toContain("Insanely fast, headless full-stack testing using Node.js");
         expect(browser.query("input[value='Login']")).toBeUndefined();
         next();
     });
 });


});
