const fs = require("fs");
const { URL } = require("whatwg-url");
const envalid = require("envalid");

const { cleanEnv, bool } = envalid;

const postmanConfig = cleanEnv(
  process.env,
  {
    POSTMAN_ENV_PERSIST_SENSITIVE_DATA: bool({
      default: false,
      desc:
        "WARN: persisting sensitive data in the generated postman environment means it is not  not safe to share to colleagues unencrypted",
    }),
  },
  { strict: true, dotEnvPath: null }
);

const { POSTMAN_ENV_PERSIST_SENSITIVE_DATA } = postmanConfig;

function toFilename(str) {
  return str.replace(/ /g, "-");
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, "g"), replace);
}

function splitUrl(str) {
  const url = new URL(str);
  const protocol =
    typeof url.protocol === "string" ? url.protocol.split(":")[0] : "http";
  return {
    raw: str,
    host: [url.hostname],
    protocol,
    port: url.port || null,
    path: url.pathname.split("/") || [],
  };
}

function groupByThree([a, b, c, ...rest]) {
  if (rest.length === 0) return [[a, b, c].filter((x) => x !== undefined)];
  return [[a, b, c]].concat(groupByThree(rest));
}

function definePayload(request) {
  const contentType = request.get("Content-Type");

  // When the content-type is a form then extract the correct postman values
  if (contentType === "application/x-www-form-urlencoded") {
    if (!request._formData) return {};
    const streams = request._formData._streams;
    const entries = groupByThree(streams).map(([key, value]) => {
      // NOTE: hacky way of extracting the key from the FormData "stream"
      // It's not a "proper" FormData object so we can't use request._formData.entries()
      // eg https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries
      const regex = /name="(.*)"/gm;
      const result = regex.exec(key);
      const cleanedKey = result[1];
      return [cleanedKey, value];
    });

    const multipartFormBody = {
      mode: "urlencoded",
      urlencoded: entries.map(([key, value]) => {
        return {
          key,
          value,
          type: "text",
        };
      }),
    };
    return {
      body: multipartFormBody,
      options: {
        urlencoded: {},
      },
    };
  }

  // By default assume that it's a JSON API and set the postman collection accordingly
  const body = request._data;
  if (!body) return {};
  const defaultRawJSON = {
    mode: "raw",
    raw: JSON.stringify(body, null, 2),
  };
  return {
    body: defaultRawJSON,
  };
}

function itemBuilder(request, name) {
  return {
    name: name,
    request: {
      method: request.method,
      header: Object.entries(request.header).map(([key, value]) => {
        return {
          key: key,
          value: value,
          type: "text",
        };
      }),
      url: splitUrl(request.url),
      ...definePayload(request),
    },
    response: [],
  };
}

class CollectionBuilder {
  constructor(name) {
    this.name = name;
    this.items = [];
  }

  add(request, name) {
    this.items.push(itemBuilder(request, name));
  }

  build() {
    return {
      info: {
        name: this.name,
        schema:
          "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
      },
      item: this.items,
    };
  }
}

class EnvironmentBuilder {
  constructor(name) {
    this.name = name;
    this.items = [];
  }

  add(
    key,
    value,
    { safeToStore = POSTMAN_ENV_PERSIST_SENSITIVE_DATA, enabled = true } = {}
  ) {
    this.items.push({
      key,
      value,
      safeToStore,
      enabled,
    });
  }

  maskString(inputStr) {
    let result = inputStr;
    for (const item of this.items) {
      result = replaceAll(result, item.value, `{{${item.key}}}`);
    }

    return result;
  }

  build() {
    return {
      name: this.name,
      values: this.items.map(({ key, value, safeToStore, enabled }) => ({
        key,
        value: safeToStore ? value : "",
        enabled,
      })),
      _postman_variable_scope: "environment",
    };
  }
}

class PostmanBuilder {
  constructor(name = "Placeholder") {
    this.name = name;
    this.collectionBuilder = new CollectionBuilder(name);
    this.environmentBuilder = new EnvironmentBuilder(name);
  }

  addRequest(request, name = "Placeholder") {
    this.collectionBuilder.add(request, name);
  }

  addVariable(key, value, opts) {
    this.environmentBuilder.add(key, value, opts);
  }

  write() {
    const environment = this.environmentBuilder.build();
    const collection = this.collectionBuilder.build();

    const files = [
      {
        name: "environment",
        filename: `reports/${toFilename(this.name)}.postman-environment.json`,
        content: environment,
      },
      {
        name: "collection",
        filename: `reports/${toFilename(this.name)}.postman-collection.json`,
        content: collection,
        postProcess: (fileContent) => {
          // NOTE: this is a bit of a hacky way to template the entire collection file all at once
          // but it seems to work so far 🤞
          return this.environmentBuilder.maskString(fileContent);
        },
      },
    ];
    for (const file of files) {
      // eslint-disable-next-line no-console
      console.info(`Writing Postman ${file.name} to ${file.filename}`);

      let fileContent = JSON.stringify(file.content, null, 2);

      if (file.postProcess) {
        fileContent = file.postProcess(fileContent);
      }

      fs.writeFileSync(file.filename, fileContent);
    }
  }
}

module.exports = { PostmanBuilder };
