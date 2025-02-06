/** @type {import('ts-jest').JestConfigWithTsJest} **/
export const testEnvironment = "node";
export const rootDir = "tests";
export const transform = {
  "^.+.tsx?$": ["ts-jest", {}],
};
