import { PostgrestError } from "@supabase/supabase-js";
import { DefaultRequestBody, rest } from "msw";
import {
  InsertWorkflowArgs,
  SUPABASE_ENDPOINT,
  TABLES,
  Workflow,
} from "services";
import { dbIndexCounter, mockDb } from "../mockDb";

export const workflowHandlers = [
  rest.get<DefaultRequestBody, Workflow[]>(
    `${SUPABASE_ENDPOINT}/${TABLES.workflow}`,
    ({ url }, res, ctx) => {
      const organizationId = Number(
        url.searchParams.get("organization_id")?.split(".")[1]
      );
      const offset = Number(url.searchParams.get("offset"));
      const limit = Number(url.searchParams.get("limit"));

      const workflows = mockDb.workflow.findMany({
        where: { organization_id: { equals: organizationId } },
        skip: offset,
        take: limit,
      });

      const count = mockDb.workflow.count({
        where: { organization_id: { equals: organizationId } },
      });

      return res(
        ctx.json(workflows),
        ctx.set("content-range", `${offset}-${limit + offset}/${count}`)
      );
    }
  ),
  rest.post<InsertWorkflowArgs, Workflow | PostgrestError>(
    `${SUPABASE_ENDPOINT}/${TABLES.workflow}`,
    ({ body }, res, ctx) => {
      const workflow = mockDb.workflow.create({
        ...body,
        id: dbIndexCounter(),
      });

      return res(ctx.json<Workflow>(workflow));
    }
  ),
];
