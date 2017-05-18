
var Browser = require("zombie");
var url = "http://localhost:8000";
var browser = new Browser();

describe("signup", function() {
    
    beforeEach(function(){
        browser.visit(url);
    });

    it("should visit the site and see the signup form", function(next) {
        expect(browser.success).toBe(true);
        expect(browser.query("input[value='Sign up']")).toBeDefined();
        next();
    });

    it("should be able to sign up with email and password", function(next){
        browser
            .fill('email', 'test@test.com')
            .fill('password', '1234');
        expect(browser.pressButton('Sign up', done)).toBeDefined();
        next();
    });

});
