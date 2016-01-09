requirejs.config({
    "baseUrl": "src/main/ts",
    "paths": {
      "app": "hello",
      "lodash": "//cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash"
    }
});

requirejs(["hello"]);
