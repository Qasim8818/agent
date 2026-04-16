{
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": "src",
  "testRegex": ".*\\.spec\\.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "collectCoverageFrom": [
    "**/*.(t|j)s"
  ],
  "coverageDirectory": "../coverage",
  "testEnvironment": "node",
  "roots": [
    "<rootDir>",
    "<rootDir>/../test"
  ],
  "moduleNameMapper": {
    "^src/(.*)$": "<rootDir>/$1"
  },
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "/dist/",
    "/coverage/"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 20,
      "functions": 20,
      "lines": 20,
      "statements": 20
    }
  }
}
