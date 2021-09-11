import { PostgrestError } from "@supabase/supabase-js";
import { DefaultRequestBody, rest } from "msw";
import {
  DeleteOrganizationMemberArgs,
  OrganizationMember,
  OrganizationRole,
  SUPABASE_ENDPOINT,
  TABLES,
  UpdateOrganizationMemberArgs,
} from "../../services";
import { mockDb } from "../mockDb";

export const organizationMemberHandlers = [
  rest.patch<UpdateOrganizationMemberArgs, OrganizationMember | PostgrestError>(
    `${SUPABASE_ENDPOINT}/${TABLES.organizationMember}`,
    ({ body }, res, ctx) => {
      const member = mockDb.organizationMembers.update({
        where: { id: { equals: body.id } },
        data: { role: body.role },
      });

      if (!member)
        return res(
          ctx.json<PostgrestError>({
            code: "0",
            details: "Wrong member",
            hint: "Wrong member",
            message: "Wrong member",
          })
        );

      return res(
        ctx.json<OrganizationMember>({
          ...member,
          role: member.role as OrganizationRole,
        })
      );
    }
  ),
  rest.delete<
    DeleteOrganizationMemberArgs,
    Record<string, never> | PostgrestError
  >(
    `${SUPABASE_ENDPOINT}/${TABLES.organizationMember}`,
    ({ url }, res, ctx) => {
      const query = url.searchParams.get("id")?.split(".")[1];
      if (!query) return res(ctx.json({}));
      const id = Number(query);

      mockDb.organizationMembers.delete({
        where: { id: { equals: id } },
      });

      return res(ctx.json({}));
    }
  ),
  rest.get<DefaultRequestBody, OrganizationMember[]>(
    `${SUPABASE_ENDPOINT}/${TABLES.organizationMember}`,
    (_req, res, ctx) => {
      console.log({ _req });

      const members = mockDb.organizationMembers.findMany({});

      return res(
        ctx.json(
          members.map((member) => ({
            ...member,
            role: member.role as OrganizationRole,
          }))
        )
      );
    }
  ),
];
