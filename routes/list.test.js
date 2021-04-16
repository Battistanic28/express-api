process.env.NODE_ENV = "test";

const request = require("supertest");

const app = require("../app");

let items = require("../fakeDb");
let item1 = {item: "limes", price: 3.99};
let item2 = {item: "bananas", price: 2.99};

beforeEach(() => {
    items.push(item1);
});

afterEach(() => {
    items.length = 0;
});


describe("GET /items", () => {
    test("Gets all items in items array", async function() {
        const resp = await request(app).get(`/items`);
        expect(resp.statusCode).toBe(200);
        expect(resp.body).toEqual([item1]);
    });
});

describe("POST /items", () => {
    test("Posts new item to items array", async function() {
        const resp = await request(app)
            .post(`/items`)
            .send(item2);
        expect(resp.statusCode).toBe(201);
        expect(resp.body).toEqual([item1, item2]);
    });
});

describe("PATCH /items", () => {
    test("Update existing item within items array", async function() {
        const resp = await request(app)
            .patch(`/items/${item1.item}`)
            .send(item2);
        expect(resp.statusCode).toBe(200);
        expect(resp.body).toEqual([item2]);
    });
});

describe("DELETE /items", () => {
    test("Deletes existing item within items array", async function() {
        const resp = await request(app)
            .delete(`/items/${item1.item}`)
        expect(resp.statusCode).toBe(200);
        expect(resp.body).toEqual([]);
    });
});


