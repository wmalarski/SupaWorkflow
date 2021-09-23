/* eslint-disable jest/require-top-level-describe */
import { drop } from "@mswjs/data";
import "@testing-library/jest-dom";
import { mockDb } from "./mockDb";
import server from "./mockServer";

beforeAll(() => {
  server.listen();
  sessionStorage.clear();
  drop(mockDb);
});
afterEach(() => {
  server.resetHandlers();
  sessionStorage.clear();
  drop(mockDb);
});
afterAll(() => server.close());
