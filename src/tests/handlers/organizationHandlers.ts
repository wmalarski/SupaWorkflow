import { PostgrestError } from "@supabase/supabase-js";
import { DefaultRequestBody, rest } from "msw";
import {
  DeleteOrganizationArgs,
  InsertOrganizationArgs,
  Organization,
  SUPABASE_ENDPOINT,
  TABLES,
  UpdateOrganizationArgs,
} from "../../services";
import { dbIndexCounter, mockDb } from "../mockDb";

export const organizationHandlers = [
  rest.post<InsertOrganizationArgs, Organization | PostgrestError>(
    `${SUPABASE_ENDPOINT}/${TABLES.organization}`,
    ({ body }, res, ctx) => {
      const author = mockDb.profile.findFirst({
        where: { id: { equals: body.author_id } },
      });

      if (!author)
        return res(
          ctx.status(400),
          ctx.json<PostgrestError>({
            code: "0",
            details: "Wrong author",
            hint: "Wrong author",
            message: "Wrong author",
          })
        );

      const organization = mockDb.organization.create({
        id: dbIndexCounter(),
        author_id: author.id,
        avatar: body.avatar,
        description: body.description,
        name: body.name,
      });

      return res(ctx.json<Organization>(organization));
    }
  ),
  rest.patch<UpdateOrganizationArgs, Organization | PostgrestError>(
    `${SUPABASE_ENDPOINT}/${TABLES.organization}`,
    ({ body }, res, ctx) => {
      const organization = mockDb.organization.update({
        where: { id: { equals: body.id } },
        data: { name: body.name, description: body.description },
      });

      if (!organization)
        return res(
          ctx.json<PostgrestError>({
            code: "0",
            details: "Wrong organization",
            hint: "Wrong organization",
            message: "Wrong organization",
          })
        );

      return res(ctx.json<Organization>(organization));
    }
  ),
  rest.delete<DeleteOrganizationArgs, Record<string, never> | PostgrestError>(
    `${SUPABASE_ENDPOINT}/${TABLES.organization}`,
    ({ url }, res, ctx) => {
      const query = url.searchParams.get("id")?.split(".")[1];
      if (!query) return res(ctx.json({}));
      const id = Number(query);

      mockDb.organization.delete({
        where: { id: { equals: id } },
      });

      return res(ctx.json({}));
    }
  ),
  rest.get<DefaultRequestBody, Organization[]>(
    `${SUPABASE_ENDPOINT}/${TABLES.organization}`,
    (_req, res, ctx) => {
      const organizations = mockDb.organization.findMany({});

      return res(ctx.json(organizations));
    }
  ),
];
