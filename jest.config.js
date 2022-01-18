module.exports = {
  "roots": [
    "<rootDir>"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "js",
    "json",
    "node"
  ],
  "moduleNameMapper": {
    "^services/(.*)$": "<rootDir>/src/services/$1",
    "^routes/(.*)$": "<rootDir>/src/routes/$1",
    "^enums/(.*)$": "<rootDir>/src/enums/$1",
    "^models/(.*)$": "<rootDir>/src/models/$1",
    "^src/(.*)$": "<rootDir>/src/$1"
  }
};
