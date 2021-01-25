const dotenv = require("dotenv");

// Load .env files into process.env
dotenv.config({ path: ".env.local", debug: process.env.DEBUG });
dotenv.config({ path: ".env", debug: process.env.DEBUG });
