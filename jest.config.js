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
  "collectCoverage": false,
  "coverageReporters": [
    "cobertura",
    "html"
  ],
  "collectCoverageFrom": [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/*.{d.ts}",
    "!**/config/**",
  ],
}
