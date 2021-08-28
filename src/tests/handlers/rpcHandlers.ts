import { PostgrestError } from "@supabase/supabase-js";
import { rest } from "msw";
import {
  InviteOrganizationMemberArgs,
  SUPABASE_ENDPOINT,
} from "../../services";
import { dbIndexCounter, mockDb } from "../mockDb";
import { addProfileScenario } from "../mockScenarios";

export const rpcHandlers = [
  rest.post<InviteOrganizationMemberArgs, {} | PostgrestError>(
    `${SUPABASE_ENDPOINT}/rpc/invite_to_organization`,
    ({ body }, res, ctx) => {
      const organization = mockDb.organization.findFirst({
        where: { id: { equals: body.organizationId } },
      });

      if (!organization)
        return res(
          ctx.status(400),
          ctx.json<PostgrestError>({
            code: "0",
            details: "Wrong organization",
            hint: "Wrong organization",
            message: "Wrong organization",
          })
        );

      const foundProfile = mockDb.profile.findFirst({
        where: { user_id: { equals: body.email } },
      });

      const profile =
        foundProfile &&
        addProfileScenario(undefined, {
          avatar: null,
          name: body.email,
        });

      if (!profile)
        return res(
          ctx.status(400),
          ctx.json<PostgrestError>({
            code: "0",
            details: "Wrong profile",
            hint: "Wrong profile",
            message: "Wrong profile",
          })
        );

      mockDb.organizationMembers.create({
        id: dbIndexCounter(),
        organization_id: organization.id,
        profile_id: profile.id,
        role: body.role,
      });

      console.log({ body, organization, profile });

      return res(ctx.json({}));
    }
  ),
];
