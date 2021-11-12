const server = require("./server");
const request = require("supertest");
const db = require("../data/dbConfig");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

describe("[GET] /archetypes", () => {
  
  test("responds with all the archetypes", async () => {
    const res = await request(server).get("/api/archetypes");
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(4);
  });
});

describe("[GET] /archetypes/:id", () => {
  test("responds with data for id requested", async () => {
    const testId = 1;
    const res = await request(server).get(`/api/archetypes/${testId}`);
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
    expect(res.body).toMatchObject([
      {
        archetype_description:
          "The King is centered, protective, provides order.",
        archetype_id: 1,
        archetype_name: "King",
      },
    ]);
  });
})