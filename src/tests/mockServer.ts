import { setupServer } from "msw/node";
import { authHandlers } from "../services/auth/authHandlers";

const server = setupServer(...authHandlers);

export default server;
