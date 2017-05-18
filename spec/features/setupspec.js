
var Browser = require("zombie");
var url = "http://localhost:8000";
var browser = new Browser();

describe("testing with zombie", function() {

    it("should have defined headless browser", function(next){
        expect(typeof browser != "undefined").toBe(true);
        expect(browser instanceof Browser).toBe(true);
        next();
    });

    it("should visit the site and see the login form", function(next) {
        browser.visit(url, function(next) {
            expect(browser.success).toBe(true);
            expect(browser.query("input[value='Sign up']")).toBeDefined();
            next();
        })
    });

});
