import { setupServer } from "msw/node";
import { authHandlers } from "./handlers/authHandlers";
import { organizationHandlers } from "./handlers/organizationHandlers";
import { organizationMemberHandlers } from "./handlers/organizationMemberHandlers";
import { rpcHandlers } from "./handlers/rpcHandlers";

const server = setupServer(
  ...authHandlers,
  ...organizationHandlers,
  ...organizationMemberHandlers,
  ...rpcHandlers
);

export default server;
