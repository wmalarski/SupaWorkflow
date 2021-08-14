import { useMemo } from "react";
import { RegisterOptions } from "react-hook-form";
import useText from "../../../../utils/translations/useText";

export type SignInViewData = {
  email: string;
  password: string;
};

export const useSignInViewOptions = (): Record<
  keyof SignInViewData,
  RegisterOptions<SignInViewData>
> => {
  const text = useText();
  return useMemo(
    () => ({
      email: {
        required: {
          value: true,
          message: text("fieldIsRequired"),
        },
        minLength: {
          value: 3,
          message: text("errorMinLength")(3),
        },
      },
      password: {
        required: {
          value: true,
          message: text("fieldIsRequired"),
        },
      },
    }),
    [text]
  );
};
