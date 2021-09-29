import { Session, UserCredentials } from "@supabase/supabase-js";
import { rest } from "msw";
import { AUTH_ENDPOINT, defaultUser, ResponseError } from "services";
import { dbIndexCounter, mockDb } from "../mockDb";

export const authHandlers = [
  rest.post<string, Session | ResponseError>(
    `${AUTH_ENDPOINT}/token`,
    ({ body }, res, ctx) => {
      const credentials: UserCredentials = JSON.parse(body);

      const user = mockDb.user.findFirst({
        where: { email: { equals: credentials.email } },
      });

      if (!user)
        return res(
          ctx.json<ResponseError>({
            error: "invalid_grant",
            error_description: "Invalid login credentials",
          }),
          ctx.status(400)
        );

      const result = {
        access_token: "eyJ.eyJ.CY80",
        token_type: "bearer",
        expires_in: 3600,
        refresh_token: "kHMih_-mwYUn08FTYMhx2g",
        user: { ...defaultUser, ...user },
      };

      return res(ctx.json<Session>(result));
    }
  ),
  rest.post<string, Session | ResponseError>(
    `${AUTH_ENDPOINT}/signup`,
    ({ body }, res, ctx) => {
      const credentials: UserCredentials = JSON.parse(body);

      const user = {
        ...defaultUser,
        ...credentials,
      };

      const userId = String(dbIndexCounter());
      mockDb.user.create({
        email: credentials.email,
        id: userId,
      });

      mockDb.profile.create({
        avatar: null,
        id: dbIndexCounter(),
        name: credentials.email,
        user_id: userId,
      });

      const result = {
        access_token: "eyJ.eyJ.CY80",
        token_type: "bearer",
        expires_in: 3600,
        refresh_token: "kHMih_-mwYUn08FTYMhx2g",
        user,
      };

      return res(ctx.json<Session>(result));
    }
  ),
  rest.post<string, Record<string, never> | ResponseError>(
    `${AUTH_ENDPOINT}/magiclink`,
    ({ body }, res, ctx) => {
      const credentials: UserCredentials = JSON.parse(body);

      const userId = String(dbIndexCounter());
      mockDb.user.create({
        email: credentials.email,
        id: userId,
      });

      mockDb.profile.create({
        avatar: null,
        id: dbIndexCounter(),
        name: credentials.email,
        user_id: userId,
      });

      return res(ctx.json({}));
    }
  ),
];
