module.exports = {
  plugins: ["jest", "prettier"],
  env: {
    node: true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:unicorn/recommended",
    "plugin:jest/recommended",
  ],
  rules: {
    indent: "off",
    "no-console": "off",
    "prettier/prettier": "warn",
    "jest/no-identical-title": "error",
    "jest/no-disabled-tests": "off",
    // Unicorn
    "unicorn/prevent-abbreviations": "off",
    "unicorn/no-null": "off",
    "unicorn/no-process-exit": "off",
    "unicorn/explicit-length-check": "off",
  },
};
