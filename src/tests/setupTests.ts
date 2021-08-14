/* eslint-disable jest/require-top-level-describe */
import "@testing-library/jest-dom";
import server from "./mockServer";

beforeAll(() => {
  server.listen();
  sessionStorage.clear();
});
afterEach(() => {
  server.resetHandlers();
  sessionStorage.clear();
});
afterAll(() => server.close());
