  var request = require("request");
  var base_url = "http://localhost:8000/";
  var space;

  beforeEach(function(){

  });

  describe("Signup", function() {
    describe("GET /", function() {
      it("finds signup form", function(next) {
        request.get(base_url, function(error, response, body) {
          expect(body).toContain('Email');
          expect(body).toContain('Password');
          next();
        });
      });
    });
  });
