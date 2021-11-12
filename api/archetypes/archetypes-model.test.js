const db = require("../../data/dbConfig.js");
const Archetypes = require("./archetypes-model");

test("is testing environment", () => {
  expect(process.env.NODE_ENV).toBe("testing");
});

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

describe("archetypes model", () => {
  describe("get endpoint", () => {
    let data;
    beforeEach(async () => {
      data = await Archetypes.get();
    });
    test('gets all archetypes from db', async () => {
      const data = await Archetypes.get();
      expect(data).toHaveLength(4)
    })
    test('get pulls the correct shape', () => {
      expect(data).toMatchObject([{"archetype_description": "The King is centered, protective, provides order.", "archetype_id": 1, "archetype_name": "King"}, {"archetype_description": "The Warrior is aggressive, mindful, decisive.", "archetype_id": 2, "archetype_name": "Warrior"}, {"archetype_description": "The Magician is intellectual, curious, reflective.", "archetype_id": 3, "archetype_name": "Magician"}, {"archetype_description": "The Lover is emotional, sensual, spiritual.", "archetype_id": 4, "archetype_name": "Lover"}])
    })

  });
});
