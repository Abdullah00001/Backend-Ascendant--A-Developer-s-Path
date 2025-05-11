import request from "supertest";
import app from "../../src/app";

describe("Check the base route", () => {
  test("It Should response get method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.status).toBe(200);
      });
  });
});
