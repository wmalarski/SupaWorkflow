import { setupServer } from "msw/node";
import { authHandlers } from "../services";

const server = setupServer(...authHandlers);

export default server;
