/** @type {import('ts-jest').JestConfigWithTsJest} **/
export const roots = ["./tests"];
export const testEnvironment = "node";
export const transform = {
  "^.+.tsx?$": ["ts-jest", {}],
};