/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  testMatch: ["**/src/__tests__/**/*.test.ts", "**/__tests__/**/*.test.ts"],
  transformIgnorePatterns: ["node_modules/(?!(your-module-to-transform)/)"],
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};
