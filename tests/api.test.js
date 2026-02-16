const request = require("supertest");
const { app, server } = require("../app");

afterAll(() => {
  server.close();
});

describe("Integration Testing - Finance APIs", () => {

  test("Dashboard API works", async () => {
    const res = await request(app).get("/api/dashboard");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("totalExpenses");
  });

  test("Expenses create & fetch", async () => {
    await request(app)
      .post("/api/expenses")
      .send({ amount: 100 });

    const res = await request(app).get("/api/expenses");
    expect(res.body.length).toBeGreaterThan(0);
  });

  test("Income create & fetch", async () => {
    await request(app)
      .post("/api/income")
      .send({ amount: 200 });

    const res = await request(app).get("/api/income");
    expect(res.body.length).toBeGreaterThan(0);
  });

});
