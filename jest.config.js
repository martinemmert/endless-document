const path = require("path");

// Some transformers and other parts are only partially used throughout the own
// modules. This function checks if the dedicated transformer / option is
// available in the module and only adds it to the list of used options in case
// it's available.
function optional(pattern, name, path = "") {
  try {
    require.resolve(name);
    return { [pattern]: `${name}${path}` };
  } catch {
    // Explicitly ignored.
  }
}

module.exports = {
  setupFilesAfterEnv: [path.resolve(__dirname, "jest.setup.js")],
  testRegex: "\\.spec\\.(j|t)sx?$",
  transform: {
    "^.+\\.stories\\.([j|t]s|md)x?$": "@storybook/addon-storyshots/injectFileName",
    "^.+\\.[j|t]sx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(ttf|woff|woff2)$": path.resolve(__dirname, "src", "__mocks__", "fileMock.js"),
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg)$": path.resolve(
      __dirname,
      "src",
      "__mocks__",
      "fileMock.js"
    ),
    "\\.(mp4|webm|wav|mp3|m4a|aac|oga)$": path.resolve(
      __dirname,
      "src",
      "__mocks__",
      "fileMock.js"
    ),
    "\\.css$": path.resolve(__dirname, "src", "__mocks__", "styleMock.js"),
  },
  transformIgnorePatterns: ["/node_modules/"],
  testPathIgnorePatterns: ["/.next/", "/.next-dev/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "mdx", "json"],
  globals: {
    "ts-jest": {
      tsConfig: path.resolve(process.cwd(), "tsconfig.test.json"),
      ...optional("babelConfig", path.resolve(process.cwd(), ".babelrc")),
      isolatedModules: true,
    },
  },
};
