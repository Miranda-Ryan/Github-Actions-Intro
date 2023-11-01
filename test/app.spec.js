const app = require("../src/app");
const supertest = require("supertest");

const request = supertest(app);

describe("App", () => {
  it("successfully returns a response from the `/` endpoint", async () => {
    const response = await request.get("/");
    expect(response.statusCode).toEqual(201);
  });

  it('successfully returns a response with "Route Not Found" message when invalid route is hit', async () => {
    const response = await request.get("/test");
    expect(response.statusCode).toEqual(404);
    expect(response.body.message).toEqual("Route not found");
    expect(response.body.type).toEqual("NOT FOUND");
  });
});
