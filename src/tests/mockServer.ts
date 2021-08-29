import { setupServer } from "msw/node";
import { authHandlers } from "./handlers/authHandlers";
import { organizationHandlers } from "./handlers/organizationHandlers";
import { organizationMemberHandlers } from "./handlers/organizationMemberHandlers";
import { rpcHandlers } from "./handlers/rpcHandlers";
import { templateHandlers } from "./handlers/templateHandlers";
import { workflowHandlers } from "./handlers/workflowHandlers";

const server = setupServer(
  ...authHandlers,
  ...organizationHandlers,
  ...organizationMemberHandlers,
  ...rpcHandlers,
  ...workflowHandlers,
  ...templateHandlers
);

export default server;
