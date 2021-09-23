import {
  Profile,
  SUPABASE_ENDPOINT,
  TABLES,
  UpdateProfileArgs,
} from "@supa-workflow/services";
import { PostgrestError } from "@supabase/supabase-js";
import { rest } from "msw";
import { mockDb } from "../mockDb";

export const profileHandlers = [
  rest.patch<UpdateProfileArgs, Profile | PostgrestError>(
    `${SUPABASE_ENDPOINT}/${TABLES.profile}`,
    ({ body }, res, ctx) => {
      const profile = mockDb.profile.update({
        where: { id: { equals: body.id } },
        data: { name: body.name },
      });

      if (!profile)
        return res(
          ctx.json<PostgrestError>({
            code: "0",
            details: "Wrong profile",
            hint: "Wrong profile",
            message: "Wrong profile",
          })
        );

      return res(ctx.json<Profile>(profile));
    }
  ),
];
