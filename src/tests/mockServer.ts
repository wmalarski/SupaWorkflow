import { setupServer } from "msw/node";
import { authHandlers } from "./handlers/authHandlers";
import { organizationHandlers } from "./handlers/organizationHandlers";

const server = setupServer(...authHandlers, ...organizationHandlers);

export default server;
