const request_url = require("supertest")("https://restful-booker.herokuapp.com");
const assert = require("chai").expect;

describe("Dummy restfull API", function () {
    it("Create Booking", async function () {
  
      const response = await request_url
        .post("/booking")
        .set('Accept', 'application/json')
        .send(
            {
                "firstname" : "melinda",
                "lastname" : "fitriani",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                },
                "additionalneeds" : "Breakfast"
            }
        );
  
      assert(response.statusCode).to.eql(200);
      assert(response.body.booking.firstname).to.eql("melinda");
      assert(response.body.booking.lastname).to.eql("fitriani");
      assert(response.body.booking.totalprice).to.eql(111);
      assert(response.body.booking.additionalneeds).to.eql("Breakfast");
    });

    it("Get Booking Ids", async function () {
  
      const response = await request_url
        .get("/booking")
        .send();

      assert(response.statusCode).to.eql(200);
    });

    it.only("Get Booking", async function () {
  
      const response = await request_url
        .get("/booking/8845")
        .set('Accept', 'application/json')
        .send();

      assert(response.statusCode).to.eql(200);
      assert(response.body.firstname).to.eql("melinda");
      assert(response.body.lastname).to.eql("fitriani");
      assert(response.body.totalprice).to.eql(111);
      assert(response.body.additionalneeds).to.eql("Breakfast");
    });

  });