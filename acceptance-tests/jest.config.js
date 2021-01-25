const envalid = require("envalid");

const { num } = envalid;

require("./src/load-dotenv");

const env = envalid.cleanEnv(
  process.env,
  {
    JEST_TIMEOUT: num({ default: 25000 }),
  },
  { strict: true, dotEnvPath: null }
);

const reporters = ["default", "jest-html-reporter", "jest-junit"].filter(
  Boolean
);

module.exports = {
  setupFiles: [require.resolve("./src/load-dotenv")],
  verbose: true,
  reporters,
  testTimeout: env.JEST_TIMEOUT,
};
