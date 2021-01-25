const path = require("path");
const envalid = require("envalid");

const { cleanEnv, str, num } = envalid;

const envConfig = cleanEnv(
  process.env,
  {
    // API Connection
    API_SCHEME: str({ default: "http" }),
    API_HOST: str({ default: "localhost" }),
    API_PORT: num({ default: 8080 }),
    API_PATH: str({ default: "/" }),
    // OpenAPI Spec
    OPENAPI_FILEPATH: str({
      default: path.join(__dirname, "openapi.yaml"),
    }),

    // RabbitMQ Connection
    AMQP_SCHEME: str({ default: "http" }),
    AMQP_HOST: str({ default: "localhost" }),
    AMQP_PORT: num({ default: 5672 }),
    AMQP_PATH: str({ default: "/" }),
    // AsyncAPI Spec
    OPENAPI_FILEPATH: str({
      default: path.join(__dirname, "asyncapi.yaml"),
    }),
  },
  { strict: true, dotEnvPath: null }
);

module.exports = {
  envConfig,
};
