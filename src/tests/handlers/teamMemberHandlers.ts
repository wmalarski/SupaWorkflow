import { PostgrestError } from "@supabase/supabase-js";
import { DefaultRequestBody, rest } from "msw";
import {
  DeleteTeamMemberArgs,
  InsertTeamMemberArgs,
  SUPABASE_ENDPOINT,
  TABLES,
  TeamMember,
} from "services";
import { dbIndexCounter, mockDb } from "../mockDb";

export const teamMemberHandlers = [
  rest.get<DefaultRequestBody, TeamMember[]>(
    `${SUPABASE_ENDPOINT}/${TABLES.teamMember}`,
    ({ url }, res, ctx) => {
      const teamId = Number(url.searchParams.get("team_id")?.split(".")[1]);
      const offset = Number(url.searchParams.get("offset"));
      const limit = Number(url.searchParams.get("limit"));

      const where = { team_id: { equals: teamId } };
      const count = mockDb.teamMember.count({ where });
      const teamMembers = mockDb.teamMember.findMany({
        where,
        skip: offset,
        take: limit,
      });

      return res(
        ctx.json(teamMembers),
        ctx.set("content-range", `${offset}-${limit + offset}/${count}`)
      );
    }
  ),
  rest.post<InsertTeamMemberArgs, TeamMember | PostgrestError>(
    `${SUPABASE_ENDPOINT}/${TABLES.teamMember}`,
    ({ body }, res, ctx) => {
      const teamMember = mockDb.teamMember.create({
        ...body,
        id: dbIndexCounter(),
      });

      return res(ctx.json<TeamMember>(teamMember));
    }
  ),
  rest.delete<DeleteTeamMemberArgs, Record<string, never> | PostgrestError>(
    `${SUPABASE_ENDPOINT}/${TABLES.teamMember}`,
    ({ url }, res, ctx) => {
      const query = url.searchParams.get("id")?.split(".")[1];
      if (!query) return res(ctx.json({}));
      const id = Number(query);

      mockDb.teamMember.delete({
        where: { id: { equals: id } },
      });

      return res(ctx.json({}));
    }
  ),
];
