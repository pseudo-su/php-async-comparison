const jestOpenAPI = require("jest-openapi");
const { PostmanBuilder } = require("../src/postman");
const { envConfig } = require("./config");

const { OPENAPI_FILEPATH } = envConfig;

jestOpenAPI(OPENAPI_FILEPATH);

// function getTestDescription() {
//   return expect.getState().currentTestName;
// }

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
    test.todo("Get stores");
    test.todo("Get stores by proximity");
    test.todo("Get store validity");
    test.todo("Get order");
  });

  describe("Partner API", () => {
    test.todo("Webhook PCS parcel");
    test.todo("Webhook 'third party' (emailonly)");
  });
});
