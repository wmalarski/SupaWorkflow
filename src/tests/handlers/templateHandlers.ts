import { PostgrestError } from "@supabase/supabase-js";
import { DefaultRequestBody, rest } from "msw";
import {
  InsertTemplateArgs,
  SUPABASE_ENDPOINT,
  TABLES,
  Template,
} from "../../services";
import { dbIndexCounter, mockDb } from "../mockDb";

export const templateHandlers = [
  rest.get<DefaultRequestBody, Template[]>(
    `${SUPABASE_ENDPOINT}/${TABLES.template}`,
    ({ url }, res, ctx) => {
      const organizationId = Number(
        url.searchParams.get("organization_id")?.split(".")[1]
      );
      const offset = Number(url.searchParams.get("offset"));
      const limit = Number(url.searchParams.get("limit"));

      const templates = mockDb.template.findMany({
        where: { organization_id: { equals: organizationId } },
        skip: offset,
        take: limit,
      });

      const count = mockDb.template.count({
        where: { organization_id: { equals: organizationId } },
      });

      return res(
        ctx.json(templates),
        ctx.set("content-range", `${offset}-${limit + offset}/${count}`)
      );
    }
  ),
  rest.post<InsertTemplateArgs, Template | PostgrestError>(
    `${SUPABASE_ENDPOINT}/${TABLES.template}`,
    ({ body }, res, ctx) => {
      const template = mockDb.template.create({
        ...body,
        id: dbIndexCounter(),
      });

      return res(ctx.json<Template>(template));
    }
  ),
];
