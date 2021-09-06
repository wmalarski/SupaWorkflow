import { setupServer } from "msw/node";
import { authHandlers } from "./handlers/authHandlers";
import { memberHandlers } from "./handlers/membersHandlers";
import { organizationHandlers } from "./handlers/organizationHandlers";
import { organizationMemberHandlers } from "./handlers/organizationMemberHandlers";
import { profileHandlers } from "./handlers/profileHandlers";
import { rpcHandlers } from "./handlers/rpcHandlers";
import { teamHandlers } from "./handlers/teamHandlers";
import { teamMemberHandlers } from "./handlers/teamMemberHandlers";
import { templateHandlers } from "./handlers/templateHandlers";
import { workflowHandlers } from "./handlers/workflowHandlers";

const server = setupServer(
  ...authHandlers,
  ...organizationHandlers,
  ...organizationMemberHandlers,
  ...rpcHandlers,
  ...workflowHandlers,
  ...templateHandlers,
  ...teamHandlers,
  ...teamMemberHandlers,
  ...memberHandlers,
  ...profileHandlers
);

export default server;
