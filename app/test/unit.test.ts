
import { configureExpress, configureRoutes } from "../config";
const request = require("supertest");
const app = configureExpress();
configureRoutes(app);

describe('GET /countries, validating countries routes', function () {
  test("Testing /countries routes ", done => {
    request(app)
      .get("/countries")
      .expect("Content-Type", /json/)
      .end((err: any, res: any) => {
        if (err) return done(err)
        expect(typeof (res.body) === "object");
        expect(typeof (res.body[0].country) === "string");
        expect(typeof (res.body[0].code) === "string");
        expect(typeof (res.body[0].vat) === "number");
        if (typeof(res.req.path.split("=")[2]) === "string" &&
                    res.req.path.split("=")[2] !== undefined && 
                    res.req.path.split("=")[2].length > 2
            )
        {
          expect(res.req.path.split("=")[2] === "asc" || "desc");
        }
        done()

      })
  });
});

describe('GET /reverse, validating reverse routes', function () {
  test("Testing /reverse routes ", done => {
    request(app)
      .get("/reverse/hello")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err: any, res: any) => {
        if (err) return done(err)
        expect(typeof (res.body) === "string");
        done()
      })
  });
});

describe('GET /append, validating append routes', function () {
  test("Testing /append routes ", done => {
    request(app)
      .get("/append?start=hello&end=bye")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err: any, res: any) => {
        if (err) return done(err)
        expect(typeof (res.body) === "string");
        done()
      })
  });
})

