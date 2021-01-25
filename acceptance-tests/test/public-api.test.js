const request = require("supertest");
const jestOpenAPI = require("jest-openapi");
const { PostmanBuilder } = require("../src/postman");
const { envConfig } = require("./config");

const { OPENAPI_FILEPATH, API_SCHEME, API_HOST, API_PORT, API_PATH } = envConfig;

jestOpenAPI(OPENAPI_FILEPATH);

function baseUrl() {
  return `${API_SCHEME}://${API_HOST}:${API_PORT}${API_PATH}`;
}

function createRequest() {
  return request(baseUrl());
}

function getTestDescription() {
  return expect.getState().currentTestName;
}

describe("API Acceptance", () => {
  /** @type PostmanBuilder */
  let postmanBuilder = null;

  beforeAll(async () => {
    postmanBuilder = new PostmanBuilder("API Acceptance");
  });

  afterAll(() => {
    postmanBuilder.write();
  });

  describe("Internal API", () => {
    test("GET /examples", async () => {
      let request = createRequest().get(`/examples`);

      postmanBuilder.addRequest(request, getTestDescription());

      const response = await request;
      expect(response.status).toEqual(200);
      expect(response).toSatisfyApiSpec();
    });
  });
});
