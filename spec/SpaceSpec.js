  var request = require("request");
  var base_url = "http://localhost:8000/";
  var space;

  beforeEach(function(){
    space = new Space();
  });

  describe("Add a new space", function() {
    describe("GET /", function() {
      it("returns status code 200", function(done) {
        request.get(base_url, function(error, response, body) {
          expect(response.statusCode).toBe(200);
          done();
        });
      });


      it("returns Hello World", function(done) {
        request.get(base_url, function(error, response, body) {
          expect(body).toBe("Welcome to the nodemonbnb");
          done();
        });
      });
    });
  });

  // 
  // describe('Homepage Tests', function() {
  //
  //   var client = {};
  //
  //   before(function(done) {
  //     client = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'}   });
  //     client.init(done);
  //   });
  //
  //   after(function(done) {
  //     client.end(done);
  //   });
  //
  //   it('Homepage Title Displays',function(done) {
  //     client
  //       .url('http://localhost:3000')
  //       .getTitle(function(err, title) {
  //         expect(err).to.not.be.true;
  //         expect(title).to.eql('Example Title');
  //       })
  //       .call(done);
  //   });
  //
  // });
