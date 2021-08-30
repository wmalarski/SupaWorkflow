import { PostgrestError } from "@supabase/supabase-js";
import { DefaultRequestBody, rest } from "msw";
import {
  InsertTeamArgs,
  SUPABASE_ENDPOINT,
  TABLES,
  Team,
} from "../../services";
import { dbIndexCounter, mockDb } from "../mockDb";

export const teamHandlers = [
  rest.get<DefaultRequestBody, Team[]>(
    `${SUPABASE_ENDPOINT}/${TABLES.team}`,
    ({ url }, res, ctx) => {
      const organizationId = Number(
        url.searchParams.get("organization_id")?.split(".")[1]
      );
      const offset = Number(url.searchParams.get("offset"));
      const limit = Number(url.searchParams.get("limit"));

      const where = { organization_id: { equals: organizationId } };
      const count = mockDb.team.count({ where });
      const teams = mockDb.team.findMany({ where, skip: offset, take: limit });

      return res(
        ctx.json(teams),
        ctx.set("content-range", `${offset}-${limit + offset}/${count}`)
      );
    }
  ),
  rest.post<InsertTeamArgs, Team | PostgrestError>(
    `${SUPABASE_ENDPOINT}/${TABLES.team}`,
    ({ body }, res, ctx) => {
      const team = mockDb.team.create({ ...body, id: dbIndexCounter() });

      return res(ctx.json<Team>(team));
    }
  ),
];
