module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "moduleNameMapper": {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy"
  },
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupTestFrameworkScriptFile": "<rootDir>/src/config/setupEnzyme.ts",
}
