import { DefaultRequestBody, rest } from "msw";
import { Member, SUPABASE_ENDPOINT, TABLES } from "services";
import { mockDb } from "../mockDb";

export const memberHandlers = [
  rest.get<DefaultRequestBody, Member[]>(
    `${SUPABASE_ENDPOINT}/${TABLES.members}`,
    ({ url }, res, ctx) => {
      const organizationId = Number(
        url.searchParams.get("organization_id")?.split(".")[1]
      );
      const offset = Number(url.searchParams.get("offset"));
      const limit = Number(url.searchParams.get("limit"));

      const where = { organization_id: { equals: organizationId } };
      const count = mockDb.members.count({ where });
      const members = mockDb.members.findMany({
        where,
        skip: offset,
        take: limit,
      });

      return res(
        ctx.json(members),
        ctx.set("content-range", `${offset}-${limit + offset}/${count}`)
      );
    }
  ),
];
